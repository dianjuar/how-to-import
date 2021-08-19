// import { small } from '@fake-npm/common-js-lib'; // smelly

// import * as lib from '@fake-npm/common-js-lib'; // smelly
// const small = lib.small;

import { small } from '@fake-npm/common-js-lib/src/lib/small'; // healthy

export function App() {
  return <div>{small}</div>;
}

export default App;
