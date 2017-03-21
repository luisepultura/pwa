import { lessons } from './library'

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

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            },
            {}
        );
    };
};

//reducers

const visibilityFilter = (state = 'HIDE_ALL', action) => {
    const { code } = action;
    switch (action.type) {
        case 'NEXT':

            return [

            ];
        case 'PREVIOUS':
            return action.filter;
        case 'GO_TO':
            return action.filter;
        default:
            return state;
    }
};

const lessonsReducer = (state = lessons, action) => {
    const { code } = action;
    switch (action.type) {
        case 'GO_TO':
            return state.map(lesson => ({ code: lesson.code, title: lesson.title, display: lesson.code === code }));
        default:
            return state.map(lesson => ({ code: lesson.code, title: lesson.title, display: false }));
    }
};

const lessonsApp = (state = {}, action) => {
    return {
        lessons: lessonsReducer(
            state.lessons,
            action
        )
    };
};

const store = createStore(lessonsApp);

console.log('Initial state:');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching GO_TO.');
store.dispatch({ type: 'GO_TO', code: 'family' });
console.log('Current state:');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching GO_TO.');
store.dispatch({ type: 'GO_TO', code: 'greetings' });
console.log('Current state:');
console.log(store.getState());
console.log('-------------');