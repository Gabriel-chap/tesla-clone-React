const AppWrapper = () => {
    const store = createStore( carReducer );

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

const App = () => {
    const dispatch = useDispatch();
};