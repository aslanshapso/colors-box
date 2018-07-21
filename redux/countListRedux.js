// The types of actions that you can dispatch to modify the state of the store
export const types = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
	add: (item) => {
		return { type: types.ADD, payload: item }
	},
	remove: (index) => {
		return { type: types.REMOVE, payload: index }
	}
}

// Initial state of the store
const initialState = {
	counts: [3,2,1,4,5],
}

export const reducer = (state = initialState, action) => {
	const { counts } = state
	const { type, payload } = action

	switch (type) {
		case types.ADD: {
			return {
				...state,
				counts: [payload, ...counts],
			}
		}
		case types.REMOVE: {
			return {
				...state,
				counts: counts.filter((count, i) => i !== payload),
			}
		}
	}

	return state
}