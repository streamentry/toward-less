declare module "remark-collapse" {
  /** The upstream plugin has no bundled TypeScript declaration. */
  const remarkCollapse: (options?: { test?: string | RegExp }) => (tree: unknown) => void;
  export default remarkCollapse;
}
