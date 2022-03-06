export const typeDefs = `
    type Todo {
        id: ID!
        done: Boolean!
        text: String!
    }
    type Query {
        getTodos: [Todo]!
    }
    type Mutation {
      addTodo(text: String!): Todo
      setDone(id: ID!, done: Boolean!): Todo
    }
    type Subscription {
      todos: [Todo]!
    }
`;
