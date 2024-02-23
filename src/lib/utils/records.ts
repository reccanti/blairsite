import { map } from "./array";
import { join } from "./strings";
/**
 * A version of Object.keys that returns a type-safe array of each of the
 * object's keys instead of string. There are reasons TypeScript doesn't do this
 * out-the-box, as explained in this wonderful StackOverflow comment:
 *
 * https://stackoverflow.com/a/62055863
 *
 * However, For working with static objects and JSON files, this should be fine
 */
type ObjectKey<T extends object> = string & keyof T;
export function keys<T extends object>(obj: T) {
  return Object.keys(obj) as ObjectKey<T>[];
}

/**
 * A convenience function for accessing an entry at a specific key. Used to
 */
type EntryForKey<T extends object, K extends ObjectKey<T>> = {
  [K in keyof T]: [K, T[K]];
}[K];
function getEntryAtKey<T extends object, Key extends ObjectKey<T>>(
  obj: T,
  k: Key
): EntryForKey<T, Key> {
  return [k, obj[k]];
}
/**
 * Building on the "keys" function, return a type-safe array of entries for the
 * object. A type-safe alternative to `Object.entries`
 */
type Entries<T extends object> = ReturnType<typeof entries<T>>;
export function entries<T extends object>(obj: T) {
  const ks = keys(obj);
  const res = ks.map((k) => getEntryAtKey(obj, k));
  return res;
}

// type WithUnflattenedProps<T> = {
//   [Property in keyof T as ParentOf<Property>]: {
//     [ChildProperty in ChildOf<Property>]:  T[`${ParentOf<Property>}_${ChildProperty }` & keyof T]
//   }
// }

// const obj = {
//   foo: "bar",
//   bing: "baz",
//   snap: {
//     crackle: "pop",
//     ping: {
//       pong: "the animation",
//     },
//   },
// } as const;

// type LeavesAndPaths<T extends object, P extends string = ""> = Entries<
//   {
//     [k in keyof T]: T[k] extends object
//       ? LeavesAndPaths<T[k], `${P}.${k & string}`>
//       : [k, T[k]];
//   }[keyof T]
// >;

// type Flatten<T extends object, P extends string = ""> = LeavesAndPaths<
//   T,
//   P
// > extends [infer PathKey, infer Value]
//   ? { [key: PathKey]: Value }
//   : never;
// // T[keyof T] extends object ? Leaves<T[keyof T]

// type L = LeavesAndPaths<typeof obj>;
// type F = Flatten<typeof obj>;

// type FlattenedEntries<T extends object> = Entries<T>[number] extends object
//   ? FlattenedEntries<Entries<T>>
//   : Entries<T>;

// type F = FlattenedEntries<typeof obj>;

// const x = entries(obj);
// function flattenEntries<T extends object>(obj: T) {
//   const es = entries(obj)
//     .map(([k, v]) => {
//       if (typeof v === "object" && v !== null) {
//         return flattenEntries(v);
//       } else {
//         return v;
//       }
//     })
//     .flat();
//   return es;
// }
// x.forEach(([k, v]) => {
//   v;
//   if (k === "snap") {
//     v
//   }
// });
// type EntryToObject<T extends object, K extends ObjectKey<T>> = EntryForKey<
//   T,
//   K
// > extends [infer Key extends string, infer Value]
//   ? { [k in Key]: Value }
//   : never;

// type ObjectEntries<T extends object> = {
//   [k in keyof T]:
//   EntryToObject<T, ObjectKey<T>>
// };

// type T = ObjectEntries<typeof obj>;

// type FlattenedObject<T extends object, P extends string[] = []> = {
//   [K in keyof T]: T[K];
// };

// type T = FlattenedObject<typeof obj>;

// function flatten<T, P extends readonly string[]>(item: T, path: P) {
//   if (typeof item === "object" && item !== null) {
//     const es = entries(item);
//     const flattenedEntries = map(es, ([k, v]) => {
//       const flattenedEntry = flatten(v, [...path, k]);
//       return flattenedEntry;
//     }).reduce((acc, entry) => {
//       acc = { ...acc, ...entry };
//       return acc;
//     });
//     return flattenedEntries;
//   }
//   return { [join(path, ".")]: item };
// }
