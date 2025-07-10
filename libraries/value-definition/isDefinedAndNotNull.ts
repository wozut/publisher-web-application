import { isDefined } from "@/libraries/value-definition/isDefined";
import { isNotNull } from "@/libraries/value-definition/isNotNull";

export function isDefinedAndNotNull(value: unknown): boolean {
  return isDefined(value) && isNotNull(value);
}
