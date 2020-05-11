import * as omgql from 'overmind-graphql';

declare module 'overmind-graphql' {
  export function gql(
    literals: ReadonlyArray<string> | Readonly<string>,
    ...placeholders: any[]
  ): any;
}
