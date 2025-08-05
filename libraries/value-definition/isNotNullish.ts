import { isNullish } from "@/libraries/value-definition/isNullish";

export function isNotNullish<T>(value: T | null | undefined): value is T {
  return !isNullish(value);
}
