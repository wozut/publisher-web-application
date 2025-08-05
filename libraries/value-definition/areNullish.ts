import { isNotNullish } from "@/libraries/value-definition/isNotNullish";

export function areNullish<T>(
  values: (T | null | undefined)[],
): values is (null | undefined)[] {
  return !values.some((value: unknown): boolean => isNotNullish(value));
}
