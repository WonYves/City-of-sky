import React, { Fragment, useEffect, useState } from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';
import './index.less'
import renderRoutes from '../router/routes'
import { Redirect, Route, useHistory } from 'react-router-dom';

const LayoutH = (props) => {

  const history = useHistory()
  const { Header, Footer, Sider, Content } = Layout;

  // 此组件为根组件 初始化时 跳转到子路由
  // 此处也可以用 Redirect 重新定向
  useEffect(() => {
    if (props.location.pathname === '/') {
      history.push('/home')
    }
  }, [])

  return (
    <Fragment>
      <Layout className="components-layout-demo">
        <Header className='header'>Header</Header>
        <Layout>
          <Sider className='sider'>
            <Button onClick={() => history.push('/home')}>home</Button>
            <Button onClick={() => history.push('/cc')}>cc</Button>
            <Button onClick={() => history.push('/cc/ttt')}>ttt</Button>
          </Sider>
          <Content>
            {renderRoutes(props.route.children)}
          </Content>
        </Layout>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    </Fragment>
  )
}

export default LayoutH
