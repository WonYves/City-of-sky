import React, { Fragment, useEffect, useState } from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';
import './index.less'
import renderRoutes from '../router/routes'
import { Redirect, useHistory } from 'react-router-dom';
import Menu from '../components/menu';
const LayoutH = (props) => {

  const history = useHistory()
  const { Content, Sider, Header, Footer } = Layout;

  // 此组件为根组件 初始化时 跳转到子路由
  // 此处也可以用 Redirect 重新定向
  useEffect(() =>   {
    if (props.location.pathname === '/') {
      history.push('/home')
    }
  }, [])

  return (
    <Fragment>
      <Layout className="components-layout-demo">
        <Header className='header'>Header</Header>
        <Layout style={{height: '80vh', overflow: 'auto'}}>
          <Sider className='sider'>
            <Menu />
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
