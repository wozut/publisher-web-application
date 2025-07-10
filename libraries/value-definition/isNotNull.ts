import { isNull } from "@/libraries/value-definition/isNull";

export function isNotNull(value: unknown): boolean {
  return !isNull(value);
}
