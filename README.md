# fluxette-promise

Promise middleware for [fluxette](https://github.com/edge/fluxette).

## Install

```sh
npm install --save fluxette-promise
```

## Usage

Allows you to chain dispatches by Promise, and turns thunked dispatches into Promises.

```js
import Flux from 'fluxette';
import promise from 'fluxette-promise';

let flux = Flux(stores).using(promise, thunk);
let { dispatch } = flux;

dispatch(getData(url))
	.then(data => dispatch({ type: DATA_SUCCESS, data }))
	.then(getMoreData(url))
	.then(moreData => dispatch({ type: MOREDATA_SUCCESS, moreData }));
```
