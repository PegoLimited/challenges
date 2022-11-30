/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: "Comment";
  by?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  kids?: Maybe<Array<Scalars["Int"]>>;
  parent: Scalars["Int"];
  text?: Maybe<Scalars["String"]>;
  time: Scalars["Int"];
  type?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  comments?: Maybe<Array<Comment>>;
  stories: Array<Story>;
  story?: Maybe<Story>;
  user?: Maybe<User>;
};

export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  storyId: Scalars["ID"];
};

export type QueryStoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  storyType: Scalars["String"];
};

export type QueryStoryArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Story = {
  __typename?: "Story";
  by: User;
  descendants?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  kids?: Maybe<Array<Comment>>;
  score?: Maybe<Scalars["Int"]>;
  submitted?: Maybe<Array<Scalars["Int"]>>;
  time?: Maybe<Scalars["Int"]>;
  title: Scalars["String"];
  type: Scalars["String"];
  url?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  about?: Maybe<Scalars["String"]>;
  created?: Maybe<Scalars["Int"]>;
  delay?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  karma?: Maybe<Scalars["Int"]>;
  submitted?: Maybe<Array<Scalars["Int"]>>;
};

export type GetStoriesByTypeQueryVariables = Exact<{
  storyType: Scalars["String"];
  offset?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type GetStoriesByTypeQuery = {
  __typename?: "Query";
  stories: Array<{
    __typename?: "Story";
    id: string;
    descendants?: number | null;
    score?: number | null;
    time?: number | null;
    title: string;
    url?: string | null;
    by: { __typename?: "User"; id: string; karma?: number | null };
  }>;
};

export type GetCommentsByStoryIdQueryVariables = Exact<{
  storyId: Scalars["ID"];
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetCommentsByStoryIdQuery = {
  __typename?: "Query";
  comments?: Array<{
    __typename?: "Comment";
    id: string;
    text?: string | null;
    time: number;
    by?: string | null;
    kids?: Array<number> | null;
  }> | null;
};

export type GetAuthorDetailsQueryVariables = Exact<{
  userId: Scalars["ID"];
}>;

export type GetAuthorDetailsQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    about?: string | null;
    created?: number | null;
    karma?: number | null;
    delay?: number | null;
    submitted?: Array<number> | null;
  } | null;
};

export const GetStoriesByTypeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetStoriesByType" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "storyType" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "stories" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "storyType" },
                value: { kind: "Variable", name: { kind: "Name", value: "storyType" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "by" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "karma" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "descendants" } },
                { kind: "Field", name: { kind: "Name", value: "score" } },
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "url" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStoriesByTypeQuery, GetStoriesByTypeQueryVariables>;
export const GetCommentsByStoryIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCommentsByStoryId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "limit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "offset" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "storyId" },
                value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "Variable", name: { kind: "Name", value: "limit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "offset" },
                value: { kind: "Variable", name: { kind: "Name", value: "offset" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "text" } },
                { kind: "Field", name: { kind: "Name", value: "time" } },
                { kind: "Field", name: { kind: "Name", value: "by" } },
                { kind: "Field", name: { kind: "Name", value: "kids" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCommentsByStoryIdQuery, GetCommentsByStoryIdQueryVariables>;
export const GetAuthorDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAuthorDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userId" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "about" } },
                { kind: "Field", name: { kind: "Name", value: "created" } },
                { kind: "Field", name: { kind: "Name", value: "karma" } },
                { kind: "Field", name: { kind: "Name", value: "delay" } },
                { kind: "Field", name: { kind: "Name", value: "submitted" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAuthorDetailsQuery, GetAuthorDetailsQueryVariables>;
