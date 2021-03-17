/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Components/Root';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider> */}
        {/* <ConfigProvider locale={ruRU}> */}
        <Root />
        {/* </ConfigProvider> */}
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
);
