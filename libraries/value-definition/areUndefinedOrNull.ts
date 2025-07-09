import { isDefinedAndNotNull } from "@/libraries/value-definition/isDefinedAndNotNull";

export function areUndefinedOrNull(values: unknown[]): boolean {
  return !values.some((value: unknown): boolean => isDefinedAndNotNull(value));
}
