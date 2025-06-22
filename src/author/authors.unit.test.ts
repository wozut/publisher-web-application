import { authors } from "./authors"
import { describe, expect, test } from "@jest/globals"

describe("create authors data", () => {
  test("ensure author ID uniqueness", () => {
    const ids = authors.map((author) => author.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })
})
