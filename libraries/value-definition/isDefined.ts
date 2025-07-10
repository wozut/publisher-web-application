import { isUndefined } from "@/libraries/value-definition/isUndefined";

export function isDefined(value: unknown): boolean {
  return !isUndefined(value);
}
