import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = compose(
        applyMiddleware(sagaMiddleware),
        typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    );
    const store = createStore(reducers, initialState, enhancer);
    store.sagaTask = sagaMiddleware.run(sagas);
    return store;
};

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(configureStore)(withReduxSaga(MyApp));