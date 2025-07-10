import { isUndefined } from "@/libraries/value-definition/isUndefined";
import { isNull } from "@/libraries/value-definition/isNull";

export function isUndefinedOrNull(value: unknown): boolean {
  return isUndefined(value) || isNull(value);
}
