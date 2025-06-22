import { Articles } from "./articles"
import { describe, expect, test } from "@jest/globals"
describe("create article data", () => {
  test("ensure article ID uniqueness", () => {
    const ids = Articles.map((article) => article.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  test("ensure article slug uniqueness", () => {
    const slugs = Articles.map((article) => article.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  test("ensure exactly one article is featured", () => {
    const isFeaturedArticle = Articles.filter((article) => article.isFeatured)
    expect(isFeaturedArticle.length).toBe(1)
  })

  test("ensure all required fields are present and have their correct types", () => {
    Articles.forEach((article) => {
      expect(article).toHaveProperty("id")
      expect(typeof article.id).toBe("string")
      expect(article).toHaveProperty("title")
      expect(typeof article.title).toBe("string")
      expect(article).toHaveProperty("date")
      expect(typeof article.date).toBe("string")
      expect(article).toHaveProperty("slug")
      expect(typeof article.slug).toBe("string")
      expect(article).toHaveProperty("isFeatured")
      expect(typeof article.isFeatured).toBe("boolean")
      expect(article).toHaveProperty("readTime")
      expect(typeof article.readTime).toBe("number")
      expect(article).toHaveProperty("description")
      expect(typeof article.description).toBe("string")
      expect(article).toHaveProperty("author")
      expect(typeof article.author).toBe("string")
      expect(article).toHaveProperty("pathToContent")
      expect(typeof article.pathToContent).toBe("string")
      expect(article).toHaveProperty("coverImage")
      expect(typeof article.coverImage).toBe("string")
      expect(article).toHaveProperty("tags")
      expect(Array.isArray(article.categories)).toBe(true)
    })
  })

  test("ensure pathToContent points to valid paths", () => {
    Articles.forEach((article) => {
      expect(article.pathToContent).toMatch(/^\/.*\.md$/)
    })
  })

  test("ensure valid dates", () => {
    Articles.forEach((article) => {
      expect(new Date(article.date).toString()).not.toBe("Invalid Date")
    })
  })
})
