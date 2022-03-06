import { PubSub } from "graphql-yoga";
import { context } from "./context";

const TODOS_CHANNEL = "TODOS_CHANNEL";
let todos = [{ id: "1", text: "Todo 1", done: false }];

export const resolvers = {
  Query: {
    getTodos: () => {
      return todos;
    },
  },
  Mutation: {
    addTodo: (
      _: unknown,
      { text }: { text: string },
      { pubsub }: { pubsub: PubSub }
    ) => {
      const newTodo = {
        id: String(todos.length + 1),
        text,
        done: false,
      };
      todos.push(newTodo);
      pubsub.publish(TODOS_CHANNEL, { todos });
      return newTodo;
    },
    setDone: (
      _: unknown,
      { id, done }: { id: string; done: boolean },
      { pubsub }: { pubsub: PubSub }
    ) => {
      const todo = todos.find((todo) => todo.id === id);
      if (!todo) {
        throw new Error("Todo not found");
      }
      todo.done = done;
      pubsub.publish(TODOS_CHANNEL, { todos });
      return todo;
    },
  },
  Subscription: {
    todos: {
      subscribe: () => {
        const iterator = context.pubsub.asyncIterator(TODOS_CHANNEL);
        context.pubsub.publish(TODOS_CHANNEL, { todos });
        return iterator;
      },
    },
  },
};
