import { HackernewsAPI } from "./datasources/hackernews-api";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { readFileSync } from "fs";
import { HackernewsDB } from "./datasources/db";

// Read .graphql extension
const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

// Required for the type generator
export interface MyContext {
  dataSources: {
    hackernewsApi: HackernewsAPI;
    hackernewsdb: HackernewsDB;
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  dataSources: () => {
    return {
      hackernewsApi: new HackernewsAPI(),
    };
  },
});

const port = 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
