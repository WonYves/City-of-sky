import React, { Fragment, useState } from 'react';
import './header.less'
const Header = () => {

  const [data, setData] = useState([])

  return (
    <Fragment>
      <div className='headerBox'>
        <div style={{display: 'flex', alignItems: 'center', fontSize: 20, color: 'white'}}>
          <div className='wyytitle'></div>
          网易云音乐
        </div>
      </div>
    </Fragment>
  )
}

export default Header
