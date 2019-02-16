module.exports = {
  "presets": [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    //"@babel/plugin-transform-runtime",
    //"@babel/plugin-syntax-dynamic-import",
    //"@babel/plugin-proposal-optional-chaining"
    [
      "module-resolver",
      {
        "extensions": [".js", ".jsx", ".css", ".scss"],
        "root": ["./src"],
        "alias": {
          /* this is for Jest */
          "root": ".",
          "src": "./src",
          "components": "./src/components"
        }
      }
    ]
  ]
}
