/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetStoriesByType($storyType: String!, $offset: Int, $limit: Int) {\n    stories(storyType: $storyType, offset: $offset, limit: $limit) {\n      id\n      by {\n        id\n        karma\n      }\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n": types.GetStoriesByTypeDocument,
    "\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n": types.GetCommentsByStoryIdDocument,
    "\n  query GetAuthorDetails($userId: ID!) {\n    user(id: $userId) {\n      id\n      about\n      created\n      karma\n      delay\n      submitted\n    }\n  }\n": types.GetAuthorDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStoriesByType($storyType: String!, $offset: Int, $limit: Int) {\n    stories(storyType: $storyType, offset: $offset, limit: $limit) {\n      id\n      by {\n        id\n        karma\n      }\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  query GetStoriesByType($storyType: String!, $offset: Int, $limit: Int) {\n    stories(storyType: $storyType, offset: $offset, limit: $limit) {\n      id\n      by {\n        id\n        karma\n      }\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAuthorDetails($userId: ID!) {\n    user(id: $userId) {\n      id\n      about\n      created\n      karma\n      delay\n      submitted\n    }\n  }\n"): (typeof documents)["\n  query GetAuthorDetails($userId: ID!) {\n    user(id: $userId) {\n      id\n      about\n      created\n      karma\n      delay\n      submitted\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;