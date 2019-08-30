import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Tabs} from 'antd';
import utils from 'utils';

const {TabPane} = Tabs;
import Test from '@/Test';

ReactDOM.render(<div>测试测试 <Button onClick={() => {
    alert(utils.formatNumber(123456.789))
}}>点击</Button> <Tabs animated={false} type="card" defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">
        <Test></Test>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
    </TabPane>
</Tabs>,</div>, document.querySelector('#app'));