# rspack-vue-error
```
warning[css]: Css parsing error
  ┌─ src\App.vue:1:1
  │
1 │ export default "button {\n  width: 100px;\n  height: 100px;\n  background-color: #000;\n  color: #fff;\n  font-size: 20px;\n}\n"
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected end of file, but expected '{'

```

```ts
import webpack = require('webpack')

const StyleInineLoader: webpack.loader.Loader = function (source) {
  // TODO minify this?
  return source`
}

export default StyleInineLoader
```
