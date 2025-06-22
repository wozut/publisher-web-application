import {describe, expect, test} from "@jest/globals"
import {articles} from "@/src/article/articles";

describe("article collection", () => {
    test("ensure article ID uniqueness", () => {
        const ids = articles.map((article) => article.id)
        const uniqueIds = new Set(ids)
        expect(uniqueIds.size).toBe(ids.length)
    })

    test("ensure article slug uniqueness", () => {
        const slugs = articles.map((article) => article.slug)
        const uniqueSlugs = new Set(slugs)
        expect(uniqueSlugs.size).toBe(slugs.length)
    })

    test("ensure pathToContent points to valid paths", () => {
        articles.forEach((article) => {
            expect(article.pathToContent).toMatch(/^src\/article\/articles-content\/.*\/.*\.md$/)
        })
    })
})
