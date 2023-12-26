export type Result<R, E extends Error> = Ok<R> | Err<E>;

export class Ok<R> {
  readonly #value: R;
  constructor(readonly res: R) {
    this.#value = res;
  }
  public isOk(): this is Ok<R> {
    return true;
  }
  public isErr(): this is Err<never> {
    return false;
  }
  public unwrap(): R {
    return this.#value;
  }
}

export class Err<E extends Error> {
  readonly #value: E;
  constructor(readonly err: E) {
    this.#value = err;
  }
  public isOk(): this is Ok<never> {
    return false;
  }
  public isErr(): this is Err<E> {
    return true;
  }
  public unwrap(): E {
    return this.#value;
  }
}
