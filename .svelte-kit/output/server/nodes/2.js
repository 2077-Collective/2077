export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/pages/_page.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/2.D2uZKBWo.js",
  "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
  "_app/immutable/chunks/index.Dgu80zs2.js",
];
export const stylesheets = ["_app/immutable/assets/2.sv5PSqAS.css"];
export const fonts = [];
