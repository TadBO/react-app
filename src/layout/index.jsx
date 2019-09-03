import React from 'react';
import {  Layout } from 'antd';
import { Router } from 'mirrorx';
import Main from './Route';


const App = (props) => {
    return (
        <Router>
            <Layout>
                <Main />
            </Layout>
        </Router>
    )
}

export default App;