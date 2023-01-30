import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';
import './index.less'
import renderRoutes from '../router/routes'
import { Redirect, useHistory } from 'react-router-dom';
import Menu from '../components/menu';
import Head from '../components/header';
const LayoutH = (props) => {

  const history = useHistory()
  const { Content, Sider, Header, Footer } = Layout;
  let babyref = useRef()

  // 此组件为根组件 初始化时 跳转到子路由
  // 此处也可以用 Redirect 重新定向
  useEffect(() =>   {
    if (props.location.pathname === '/') {
      history.push('/home')
    }
  }, [])

  const handleBaby = () => {
    console.log(babyref.current.style.top)
    if (babyref.current.style.top !== '0px') {
      babyref.current.style.top =  0
    } else if (babyref.current.style.top == '0px') {
      babyref.current.style.top = '88vh'
    }
  }

  return (
    <Fragment>
      <Layout className="components-layout-demo">
        <Header className='header'>
          <Head></Head>
        </Header>
        <Layout style={{height: '80vh', overflow: 'auto'}}>
          <Sider className='sider'>
            <Menu />
          </Sider>
          <Content>
            {renderRoutes(props.route.children)}
          </Content>
        </Layout>
        <div ref={babyref} className={'mcdate'}></div>
        <Footer className='footer'>
          <Button onClick={handleBaby}>111</Button>
        </Footer>
      </Layout>
    </Fragment>
  )
}

export default LayoutH
