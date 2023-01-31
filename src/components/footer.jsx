import React, { Fragment, useState, useContext } from 'react';

import { Button, Layout } from '@douyinfe/semi-ui';
const Footer = (props) => {

  const [data, setData] = useState([])

  return (
    <Fragment>
      <div className='footerbox'>
        <Button onClick={props.handleBaby}>111</Button>
      </div>
    </Fragment>
  )
}

export default Footer
