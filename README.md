# fluxette-thunk

Thunk middleware for [fluxette](https://github.com/edge/fluxette).

## Install

```sh
npm install --save fluxette-thunk
```

## Usage

Thunks allow you to provide a function, instead of a plain action, to the flux dispatcher. The flux object is passed to the function, allowing you to dispatch asynchronously or conditionally, log actions and state, or accommodate other use cases.

```js
import Flux from 'fluxette';
import thunk from 'fluxette-thunk';

let flux = Flux(stores).using(thunk);

flux.dispatch(({ dispatch }) =>
	asyncRequest(params, (err, res) => {
		if (err) {
			dispatch({ type: DATA_FAILURE, err });
		}
		else {
			dispatch({ type: DATA_SUCCESS, data: res });
		}
	})
)
```
