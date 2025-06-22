import {describe, expect, test} from "@jest/globals"
import {categories} from "@/src/category/categories";

describe("category collection", () => {
    test("ensure article ID uniqueness", () => {
        const ids = categories.map((category) => category.id)
        const uniqueIds = new Set(ids)
        expect(uniqueIds.size).toBe(ids.length)
    })

    test("ensure category name uniqueness", () => {
        const names = categories.map((category) => category.name)
        const uniqueNames = new Set(names)
        expect(uniqueNames.size).toBe(names.length)
    })
})
