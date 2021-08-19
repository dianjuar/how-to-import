# How to Import

## `yalc` a library

1. build the library:
   - `npx nx build LIB_NAME`
2. step on dist:
   - `cd dist/libs/LIB_NAME`
3. `yalc` it
   - `npx yalc publish`
4. step on the root project:
   - `cd ../../..`
5. "install it":
   - `npx yalc add @fake-npm/LIB_NAME`

###### A [custom executor](https://nx.dev/latest/angular/executors/creating-custom-builders) would be veeeery nice

Possible lib names:

- `common-js-lib`

## Analyze an App

`yarn analyze APP_NAME`

Possible apps names:

- `directly-app`
- `commonjs-app`
