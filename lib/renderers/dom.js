import React from "react";
import ReactDOM from "react-dom";

import App from "../../react/components/App";
import StateApi from "../../lib/stage-api";

const store = new StateApi(window.initialData);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);