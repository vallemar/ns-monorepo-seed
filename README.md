# Monorepo Shared Code between NativeScript + Vue Vite

This project is a setup to start with any monorepo between NS applications, vue vite (web).

## Importants file of project

#### Common tsconfig
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-seed/blob/master/tsconfig.json#L18)

#### NativeScript APPs
[webpack.config.js](https://github.com/vallemar/ns-monorepo-seed/blob/master/apps/ns-vue/webpack.config.js)\
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-seed/blob/master/apps/ns-vue/tsconfig.json#L15-L16)

#### Vue Vite APPs
[vite.config.ts](https://github.com/vallemar/ns-monorepo-seed/blob/master/apps/vite-vue-ts/vite.config.ts#L8-L13)\
[tsconfig.ts](https://github.com/vallemar/ns-monorepo-seed/blob/master/apps/vite-vue-ts/tsconfig.json#L22-L27)


## Native Code NS or Web
To differentiate between web and native code, the files `*.native.ts` have been established and for the web they are `*.web.ts`. These can be found in NS webpack, vite.config.ts and vue.config.ts



## License
[MIT](https://choosealicense.com/licenses/mit/)
