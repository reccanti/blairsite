type Split<
  S extends string,
  D extends string
> = S extends `${infer P0}${D}${infer P1}` ? [P0, ...Split<P1, D>] : [S];

export function split<S extends string, D extends string>(
  str: S,
  delimiter: D
): Split<S, D> {
  return str.split(delimiter) as Split<S, D>;
}

// type Head<A extends readonly string[]> = A extends readonly [infer Head, ...any]
//   ? Head
//   : never;
// type Tail<A extends readonly string[]> = A extends readonly [any, ...infer Tail]
//   ? Tail
//   : [];

type Join<A extends readonly string[], D extends string> = A extends readonly []
  ? ""
  : A extends readonly [infer S extends string]
  ? `${S}`
  : A extends readonly [infer H extends string, ...infer T extends string[]]
  ? `${H}${D}${Join<T, D>}`
  : never;

const myArr = ["Hello", "World", "How", "are", "you"] as const;
const myArr2 = [] as const;

type J = Join<typeof myArr, "-">;
export function join<A extends readonly string[], D extends string>(
  arr: A,
  delimiter: D
) {
  return arr.join(delimiter) as Join<A, D>;
}

const str = join(["amber", "is", "cute!!!"] as const, ".");

// type H = Head<typeof myArr>;
// type T = Tail<typeof myArr>;
// type ET = Tail<typeof myArr2>;

[1, 2, 3, 4, 5];
