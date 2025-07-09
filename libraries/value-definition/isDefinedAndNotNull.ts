import { isUndefinedOrNull } from "./isUndefinedOrNull";

export function isDefinedAndNotNull(value: unknown): boolean {
  return !isUndefinedOrNull(value);
}
