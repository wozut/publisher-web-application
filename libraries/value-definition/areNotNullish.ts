import { areNullish } from "@/libraries/value-definition/areNullish";

export function areNotNullish<T>(
  values: (T | null | undefined)[],
): values is T[] {
  return !areNullish(values);
}
