import React, { Fragment, useEffect, useState } from 'react';
import renderRoutes from '../../router/routes';
import './index.less'
const Home = (props) => {

  const [count, setCount] = useState(0)

  const ulList = [
    {
      title: '个性音乐',
      id: 1,
    },
    {
      title: '歌单',
      id: 2,
    },
    {
      title: '排行榜',
      id: 3,
    },
    {
      title: '最新音乐',
      id: 4,
    },
  ]

  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <Fragment>
      <div style={{padding: 20}}>
        <header>
          <ul className='ul_list'>
            {
              ulList.map((item, index) => (
                <li
                  key={item.id}
                  className={count === index ? 'activeed' : ' '}
                  onClick={() => setCount(index)}
                >{item.title}</li>
              ))
            }
          </ul>
        </header>
        {renderRoutes(props.route.children)}
      </div>
    </Fragment>
  )
}

export default Home
