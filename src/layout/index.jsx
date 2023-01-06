import React, { Fragment, useEffect, useState } from 'react';
import { Layout } from '@douyinfe/semi-ui';
import './index.less'
import renderRoutes from '../router/routes'
import { Redirect, useHistory } from 'react-router-dom';

const LayoutH = (props) => {

  const history = useHistory()

  // 此组件为根组件 初始化时 跳转到子路由
  // 此处也可以用 Redirect 重新定向
  useEffect(() => {
    if (props.location.pathname === '/') {
      history.push('/home')
    }
  }, [])

  return (
    <Fragment>
      {renderRoutes(props.route.children)}
    </Fragment>
  )
}

export default LayoutH
