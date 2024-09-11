export const index = 1;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import("../entries/fallbacks/error.svelte.js"))
    .default);
export const imports = [
  "_app/immutable/nodes/1.DzrKm0UQ.js",
  "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
  "_app/immutable/chunks/index.Dgu80zs2.js",
  "_app/immutable/chunks/entry.CAqG5Nqq.js",
];
export const stylesheets = [];
export const fonts = [];
