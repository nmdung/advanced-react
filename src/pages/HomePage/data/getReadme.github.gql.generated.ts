/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetReadmeQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetReadmeQuery = { currentRepo: { owner: string, name: string }, repository?: { id: string, object?: { text?: string | null | undefined } | {} | null | undefined } | null | undefined };


export const GetReadmeDocument = gql`
    query GetReadme($owner: String!, $name: String!) {
  currentRepo @client {
    owner @export(as: "owner")
    name @export(as: "name")
  }
  repository(name: $name, owner: $owner) {
    id
    object(expression: "HEAD:README.md") {
      ... on Blob {
        text
      }
    }
  }
}
    ` as unknown as DocumentNode<GetReadmeQuery, GetReadmeQueryVariables>;