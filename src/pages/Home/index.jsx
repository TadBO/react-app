import React from 'react';
import  { actions, connect } from 'mirrorx';
import { Button } from 'antd';
import  './model';
const Home = (props) => {
    console.log(props);
    console.log(actions.routing);
    return (
       <>
           <h1>首页</h1>
           <Button type="primary" onClick={() => {
               actions.routing.push('/about')
           }}>点击</Button>
       </>
    )
};

export default connect(state => state.home)(Home);