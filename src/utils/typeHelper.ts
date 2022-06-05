export function ensure<T>(arg?: T | null): T {
  if (arg !== null && arg !== undefined) return arg;
  throw TypeError('This value should have been defined');
}

export type ReadonlyTuple<V, N extends number, T extends V[] = []> = Readonly<
  N extends T['length'] ? T : ReadonlyTuple<V, N, [...T, V]>
>;

export type Tuple<
  V,
  N extends number,
  T extends V[] = []
> = N extends T['length'] ? T : ReadonlyTuple<V, N, [...T, V]>;

export function isArray<T>(arg?: T | T[]): arg is T[] {
  return Array.isArray(arg);
}

export type RemoveIndex<T> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
    ? never
    : P]: RemoveIndex<T[P]>;
};
