import { describe, expect, test } from "@jest/globals";
import { isBlob } from "@/libraries/value-definition/isBlob";

describe("isBlob function", () => {
  test("should return true for Blob instances", () => {
    // Create a Blob instance
    const blob = new Blob(["test content"], { type: "text/plain" });
    expect(isBlob(blob)).toBe(true);
  });

  test("should return false for non-Blob values", () => {
    // Test various non-Blob values
    expect(isBlob("string")).toBe(false);
    expect(isBlob(123)).toBe(false);
    expect(isBlob({})).toBe(false);
    expect(isBlob([])).toBe(false);
    expect(isBlob(true)).toBe(false);
    expect(isBlob(false)).toBe(false);
    expect(isBlob(new Date())).toBe(false);
    expect(isBlob(new Map())).toBe(false);
    expect(isBlob(new Set())).toBe(false);
    expect(isBlob(new ArrayBuffer(10))).toBe(false);
    expect(isBlob(() => {})).toBe(false);
  });

  test("should return false for null and undefined", () => {
    expect(isBlob(null)).toBe(false);
    expect(isBlob(undefined)).toBe(false);
  });
});