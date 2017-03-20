//store
const createStore = reducer => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe,
    };
};


//reducers

const visibilityFilter = (state = 'HIDE_ALL', action) => {
    switch (action.type) {
        case 'NEXT':
            const { index, lessonId } = action;
            return [

            ];
        case 'PREVIOUS':
            const { index, lessonId } = action;
            return action.filter;
        case 'GO_TO':
            const { lessonId } = action;
            return action.filter;
        default:
            return state;
    }
};

const app = (sate = {}, action) => {
    return {
        lessons: [],
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};
