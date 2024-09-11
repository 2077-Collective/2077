export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_layout.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/0.Cu850s7A.js",
  "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
  "_app/immutable/chunks/index.Dgu80zs2.js",
];
export const stylesheets = ["_app/immutable/assets/0.UV9z_2qc.css"];
export const fonts = [];
