import React, {Component} from 'react';
import routers from './router';
import {Route, Link, actions, connect} from 'mirrorx';
import {Layout, Menu, Icon, Button} from "antd";
import './model';

const {Sider, Header, Content} = Layout;

const {SubMenu} = Menu;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: ''
        }
    }

    componentDidMount() {
        const {routing} = this.props;
        const {location} = routing;
        const {pathname} = location ? location : '/';
        this.setState({
            path: pathname,
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        const {routing} = nextProps;
        const {location} = routing;
        const {pathname} = location ? location : '/';
        this.setState({
            path: pathname
        });
    }


    handleChangeRoute = (e) => {
        this.setState({
            path: e.key,
        });
    }
    routes = (
        <>
            {
                routers.map((item, index) => {
                    if (item.path === '/') {
                        return <Route exact key={index} path={item.path} component={item.component}/>
                    }
                    return <Route key={index} path={item.path} component={item.component}/>
                })
            }
        </>
    )

    render() {
        const {path} = this.state;
        const {route, dispatch} = this.props;
        const {collapsed} = route;
        return (
            <>
                <Sider collapsed={collapsed}>
                    <Menu mode="inline" selectedKeys={[path]} onClick={this.handleChangeRoute}>
                        {
                            routers.map((item, index) => {
                                return (
                                    <Menu.Item key={item.path}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header>头部 <Button onClick={() => {
                        dispatch({type: 'route/setState', data: {collapsed: !collapsed}})
                    }}>点击</Button></Header>
                    <Content>
                        {
                            this.routes
                        }
                    </Content>
                </Layout>
            </>
        )
    }
}

export default connect((routing, route) => {
    return {
        ...routing,
        ...route,
    };
})(Main);