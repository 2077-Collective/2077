export const manifest = (() => {
  function __memo(fn) {
    let value;
    return () => (value ??= value = fn());
  }

  return {
    appDir: "_app",
    appPath: "_app",
    assets: new Set([
      "ethernaut.webp",
      "favicon.svg",
      "fonts/IBMPlexMono-Medium.woff2",
      "fonts/IBMPlexMono-SemiBold.woff2",
      "fonts/Inter-Black.woff2",
      "fonts/Inter-Bold.woff2",
      "fonts/Inter-ExtraBold.woff2",
      "fonts/Inter-Medium.woff2",
      "fonts/Inter-Regular.woff2",
      "fonts/Inter-SemiBold.woff2",
      "hero.webp",
      "open-graph.png",
    ]),
    mimeTypes: {
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".woff2": "font/woff2",
      ".png": "image/png",
    },
    _: {
      client: {
        start: "_app/immutable/entry/start.yWEM87yb.js",
        app: "_app/immutable/entry/app.B_liz5h2.js",
        imports: [
          "_app/immutable/entry/start.yWEM87yb.js",
          "_app/immutable/chunks/entry.CAqG5Nqq.js",
          "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
          "_app/immutable/entry/app.B_liz5h2.js",
          "_app/immutable/chunks/scheduler.Ce_0Mfso.js",
          "_app/immutable/chunks/index.Dgu80zs2.js",
        ],
        stylesheets: [],
        fonts: [],
        uses_env_dynamic_public: false,
      },
      nodes: [
        __memo(() => import("./nodes/0.js")),
        __memo(() => import("./nodes/1.js")),
        __memo(() => import("./nodes/2.js")),
      ],
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null,
        },
      ],
      matchers: async () => {
        return {};
      },
      server_assets: {},
    },
  };
})();
