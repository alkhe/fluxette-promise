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

let flux = Flux(reducers).using(promise);
let { dispatch } = flux;

dispatch(
	dataPromise(url)
		.then(data => ({ type: DATA_SUCCESS, data }))
		.catch(err => ({ type: DATA_FAILURE, err }))
);
```
