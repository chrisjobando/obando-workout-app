import { GraphQLServer } from "graphql-yoga";
import { context } from "./context";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
});
server.start(() => console.log("Server is running on http://localhost:4000"));
