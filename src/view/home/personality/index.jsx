import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './personality.less'
import { getbanner } from '../../../api/home'
import { Carousel, RadioGroup, Radio, Space, Typography } from '@douyinfe/semi-ui';

const Personality = () => {

  const [imgList, setImgList] = useState([])
  const style = {
    width: '100%',
    height: '300px',
  };

  const imgList2 = [
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
  ];

  const getImg = useCallback(async(params) => {
    const res = await getbanner(params)
    if (res.code === 200) {
      console.log(res.banners);
      setImgList(res.banners)
    }
  })

  useEffect(() => {
    getImg()
  }, [])

  return (
    <Fragment>
      <div className='app_container'>
        <div className='app_main'>
          <header className='banner'>
            <Carousel style={style} autoPlay={{ interval: 1500, hoverToPause: true }} theme='dark'>
              {
                imgList.map((item, index) => (
                  <div key={index} style={{backgroundSize: 'cover', background: `url(${item.imageUrl})` }}>
                  </div>
                ))
                // <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url(${item.imageUrl})` }}>
                // </div>
              }
            </Carousel>
          </header>
        </div>
      </div>
    </Fragment>
  )
}

export default Personality
