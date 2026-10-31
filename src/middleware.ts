import { defineMiddleware } from "astro:middleware";

/** Static [lang] routes and the root redirect own locale routing explicitly. */
export const onRequest = defineMiddleware((_context, next) => next());
