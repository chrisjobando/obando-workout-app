import type { Component } from "solid-js";
import { For, createSignal } from "solid-js";
import {
  createClient,
  defaultExchanges,
  subscriptionExchange,
} from "@urql/core";
import { pipe, subscribe } from "wonka";
import { SubscriptionClient } from "subscriptions-transport-ws";
import {
  AddTodoMutation,
  SetDoneMutation,
  TodosSubscription,
} from "../graphql";

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const subscriptionClient = new SubscriptionClient("ws://localhost:4000", {
  reconnect: true,
});

const client = createClient({
  url: "http://localhost:4000",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) =>
        subscriptionClient.request(operation) as any,
    }),
  ],
});

const [todos, setTodos] = createSignal<Todo[]>([]);

const { unsubscribe } = pipe(
  client.subscription(TodosSubscription),
  subscribe((result) => {
    setTodos(result.data.todos);
  })
);

const Todo: Component = () => {
  const [text, setText] = createSignal<string>("");

  const onAdd = async () => {
    await client.mutation(AddTodoMutation, { text: text() }).toPromise();
    setText("");
  };

  const toggle = async (id: string) => {
    await client
      .mutation(SetDoneMutation, {
        id,
        done: !todos().find((todo: Todo) => todo.id === id)!.done,
      })
      .toPromise();
  };

  return (
    <div>
      <For each={todos()}>
        {({ id, done, text }: Todo) => (
          <div>
            <input type="checkbox" checked={done} onclick={() => toggle(id)} />
            <span>{text}</span>
          </div>
        )}
      </For>
      <div>
        <input
          type="text"
          value={text()}
          oninput={(evt) => setText(evt.currentTarget.value)}
        />
        <button onclick={onAdd}>Add item</button>
      </div>
    </div>
  );
};

export default Todo;
