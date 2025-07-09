import { isUndefinedOrNull } from "./isUndefinedOrNull";

export function areDefinedAndNotNull(values: unknown[]): boolean {
  return !values.some((value: unknown): boolean => isUndefinedOrNull(value));
}
