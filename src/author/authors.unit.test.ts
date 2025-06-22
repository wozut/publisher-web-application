import { Authors } from "./authors"
import { describe, expect, test } from "@jest/globals"

describe("create authors data", () => {
  test("ensure author ID uniqueness", () => {
    const ids = Authors.map((author) => author.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  test("ensure author name uniqueness", () => {
    const names = Authors.map((author) => author.name)
    const uniqueNames = new Set(names)
    expect(uniqueNames.size).toBe(names.length)
  })
})
