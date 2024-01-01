/** @see https://basarat.gitbook.io/typescript/main-1/nominaltyping#using-interfaces */
export type Brand<T, U extends `${string}Brand`> = T & { [_ in U]: never };
