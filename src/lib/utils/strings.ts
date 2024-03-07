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

type Join<A extends readonly string[], D extends string> = A extends readonly []
  ? ""
  : A extends readonly [infer S extends string]
  ? `${S}`
  : A extends readonly [infer H extends string, ...infer T extends string[]]
  ? `${H}${D}${Join<T, D>}`
  : never;

export function join<A extends readonly string[], D extends string>(
  arr: A,
  delimiter: D
) {
  return arr.join(delimiter) as Join<A, D>;
}

type Titlecase<S extends string> = S extends `${infer P0}${infer D}`
  ? `${Uppercase<P0>}${D}`
  : S extends ""
  ? ""
  : Uppercase<S>;

export function toTitleCase<S extends string>(s: S): Titlecase<S> {
  const [first, ...rest] = s.split("");
  return `${first.toUpperCase()}${rest.join("")}` as Titlecase<S>;
}
