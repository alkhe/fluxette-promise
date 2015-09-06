export default function(next) {
	return action => {
		if (action.then instanceof Function) {
			return action;
		}
		else {
			let future = next(action);
			return action instanceof Function
				? Promise.resolve(future)
				: future;
		}
	}
}
