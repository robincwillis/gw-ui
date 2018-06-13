export default function wrapActions (actions, dispatch) {
	return Object.keys(actions).reduce((acc, key) => {
		acc[key] = Object.keys(actions[key]).reduce((actionAcc, actionKey) => {
			if (typeof actions[key][actionKey] === 'function') {
				actionAcc[actionKey] = function () {
					return dispatch(actions[key][actionKey].apply(null, arguments));
				};
			}
			return actionAcc;
		}, {});

		return acc;
	}, {});
}
