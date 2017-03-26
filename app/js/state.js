import { themes, getLesson } from './library'

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

const lessonReducer = (state = { index: 0 }, action) => {
    const { code } = action;
    const { index } = state;
    const lesson = getLesson(code);
    switch (action.type) {
        case 'NEXT':
            if (lesson.length - 1 === index) {
                return { code, index: 0, lesson: lesson[0], };
            }
            return { code, index: index + 1, lesson: lesson[index + 1], };
        case 'PREVIOUS':
            if (index === 0) {
                return { code, index: lesson.length - 1, lesson: lesson[lesson.length - 1], };
            }
            return { code, index: index - 1, lesson: lesson[index - 1], };
        default:
            return state;
    }
};

const themeReducer = (state = themes, action) => {
    const { code } = action;
    switch (action.type) {
        case 'GO_TO':
            return state.map(theme => ({ code: theme.code, title: theme.title, display: theme.code === code }));
        default:
            return state.map(theme => ({ code: theme.code, title: theme.title, display: false }));
    }
};

const App = combineReducers({ themeReducer, lessonReducer });

const store = createStore(App);

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

console.log('Dispatching NEXT.');
store.dispatch({ type: 'NEXT', code: 'greetings' });
console.log('Current state:');
console.log(store.getState());
console.log('-------------');

console.log('Dispatching NEXT.');
store.dispatch({ type: 'NEXT', code: 'greetings' });
console.log('Current state:');
console.log(store.getState());
console.log('-------------');

//https://plnkr.co/edit/MTY7XxTzlUWilCcpo4AB?p=preview