export function isUndefinedOrNull(value: unknown): boolean {
  return typeof value === "undefined" || value === null;
}
