export function map<T, U, A extends readonly T[]>(
  arr: A,
  cb: (item: A[number]) => U
) {
  return arr.map((a) => cb(a)) as U[];
}

// const arr = ["Hello", "world", "amber", "is", "cute"] as const;
