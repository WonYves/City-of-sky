import React, { Fragment, useState, useContext } from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';
import './footer.less'
const Footer = (props) => {

  const [data, setData] = useState([])

  return (
    <Fragment>
      <div className='footerbox'>
        <div className='btnsong'>
          <Button onClick={props.handleBaby}>111</Button>
        </div>
        <div>
          <audio src="http://example.com/movie.ogg" controls>1111</audio>
        </div>
        <div></div>
      </div>
    </Fragment>
  )
}

export default Footer
