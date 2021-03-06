import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store, {history} from './store'
// import 'sanitize.css/sanitize.css'
import './index.css'
import App from "./App";

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history} basename="/aviasales-demo-frontend">
            <div>
                <App/>
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
