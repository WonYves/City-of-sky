import React, { Fragment, useState } from 'react';
import renderRoutes from '../../router/routes'


const Cc = (props) => {

  const [data, setData] = useState([])

  return (
    <Fragment>
      111
      {renderRoutes(props.route.children)}
      111
    </Fragment>
  )
}

export default Cc
