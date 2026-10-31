import type { APIRoute } from "astro";
import sharp from "sharp";
/** A static branded social preview; no remote font requests at request time. */
export const GET: APIRoute = async () => {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f7f5ef"/><path d="M85 90c20-20 40 20 80 0M100 120c16-12 28 12 56 0M115 146c12-4 20 4 32 0" stroke="#355e46" stroke-width="3" fill="none" stroke-linecap="round"/><text x="85" y="270" font-family="Georgia,serif" font-size="88" fill="#252a25">Toward Less</text><text x="90" y="355" font-family="Georgia,serif" font-size="40" fill="#355e46">Less clinging. Clearer seeing.</text><line x1="90" y1="455" x2="1110" y2="455" stroke="#d8ddd3"/><text x="90" y="520" font-family="sans-serif" font-size="24" fill="#62695f">Technology / Life / Practice</text><text x="1110" y="520" text-anchor="end" font-family="sans-serif" font-size="24" fill="#62695f">EN / VI</text></svg>`;
  const image = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(image), { headers: { "Content-Type": "image/png" } });
};
