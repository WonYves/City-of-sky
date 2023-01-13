import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './personality.less'
import {
  getbanner,
  personalized,
} from '../../../api/home'
import { Carousel, RadioGroup, Radio, Space, Typography } from '@douyinfe/semi-ui';

const imgList2 = [
  'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
  'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
  'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
];
const Personality = () => {

  const [imgList, setImgList] = useState([])
  const [mcdata, setMcdata] = useState([])

  const style = {
    width: '1000px',
    height: '300px',
  };

  // 轮播图
  const getImg = useCallback(async(params) => {
    const res = await getbanner(params)
    if (res.code === 200) {
      setImgList(res.banners)
    }
  }, [])

  // 歌单
  const getMcdata = useCallback(async(params) => {
    const res = await personalized(params)
    if (res.code === 200) {
      console.log(res);
      setMcdata(res.result)
    }
  }, [])

  useEffect(() => {
    getImg()
    getMcdata({limit: 10})
  }, [])

  return (
    <Fragment>
      <div className='app_container'>
        <div className='app_main'>
          <header className='banner'>
            {
              imgList.length &&  <Carousel style={style} autoPlay={{ interval: 1500, hoverToPause: true}} theme='dark'>
                {
                  imgList.map((v, i) => <div key={i} style={{ background: `url(${v.imageUrl})`, backgroundSize: '100% 100%' }}></div>)
                }
              </Carousel>
            }

          </header>
          <div style={{marginTop: 40}}>
            <div style={{ fontSize: 25}}>推荐歌单</div>
            <ul className='Recommendedsonglist'>
              {
                mcdata.map((item, index) => (
                  <li key={item.id} >
                    <div style={{background: `url(${item.picUrl})`, backgroundSize: '100% 100%'}}></div>
                    <p>{item.name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Personality
