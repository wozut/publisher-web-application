import { isNull } from "@/libraries/value-definition/isNull";

export function isNotNull<T>(value: T | null): value is T {
  return !isNull(value);
}
