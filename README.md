# Monorepo Shared Code between NativeScript + Vue Vite + Vue CLI

This project is a setup to start with any monorepo between NS applications, vue vite (web) and vue CLI (web).

## Importants file of project
#### NativeScript APPs
[webpack.config.js](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/ns-app-test/webpack.config.js#L6)\
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/ns-app-test/tsconfig.json#L22)\
[package.json](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/ns-app-test/package.json#L9)

#### Vue Vite APPs
[vite.config.ts](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-vite-app/vite.config.ts)\
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-vite-app/tsconfig.json#L18)\
[package.json](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-vite-app/package.json#L11)

#### Vue CLI APPs
[vue.config.js](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-cli-app/vue.config.js)\
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-cli-app/tsconfig.json#L21)\
[package.json](https://github.com/vallemar/ns-monorepo-example/blob/master/apps/vue-cli-app/package.json#L11)


## Usage
To differentiate between web and native code, the files `*.native.ts` have been established and for the web they are `*.web.ts`. These can be found in NS webpack, vite.config.ts and vue.config.ts



## License
[MIT](https://choosealicense.com/licenses/mit/)