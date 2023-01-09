import React, { Fragment, useEffect, useState } from 'react';
import renderRoutes from '../../router/routes';

const Home = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <Fragment>
      <header>
        <ul>
          <li>个性推荐</li>
          <li>歌单</li>
          <li>排行榜</li>
          <li>最新音乐</li>
        </ul>
      </header>
      {renderRoutes(props.route.children)}
    </Fragment>
  )
}

export default Home
