import React, { Fragment, useState } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import '../layout/index.less'
const LayoutH = () => {

  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Fragment>
      <Layout className="components-layout-demo">
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Fragment>
  )
}

export default LayoutH
