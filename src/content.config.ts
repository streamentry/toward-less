import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { AUTHOR } from "./site";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    author: z.string().min(1).default(AUTHOR),
    authorType: z.enum(["Person", "Organization"]).default("Person"),
    sourceURL: z.url().optional(),
    lang: z.enum(["en", "vi"]),
    slug: z
      .string()
      .regex(/^[a-z][a-z0-9-]*$/, "Use a lowercase ASCII slug starting with a letter"),
    translationKey: z.string().min(1),
    pubDatetime: z.coerce.date(),
    modDatetime: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    tags: z.array(z.string().regex(/^[a-z][a-z0-9-]*$/)).default([]),
  }),
});

export const collections = { posts };
