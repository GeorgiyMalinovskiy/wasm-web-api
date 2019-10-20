const js = import("wasm-web-api");
js.then(js => {
  js.greet("WebAssembly");
});
