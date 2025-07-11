import { isNull } from "@/libraries/value-definition/isNull";
import { isUndefined } from "@/libraries/value-definition/isUndefined";

export function isNullish<T>(
  value: T | null | undefined,
): value is null | undefined {
  return isNull(value) || isUndefined(value);
}
