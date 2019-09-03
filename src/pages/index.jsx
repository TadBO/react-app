import React from 'react';
import{ actions } from 'mirrorx';
import { Button } from 'antd';


const Pages = () => {
    console.log(actions);
    return (<div>测试下 <Button onClick={() => {actions.app.changeTitle()}}>点击</Button></div>)
}

export default Pages;