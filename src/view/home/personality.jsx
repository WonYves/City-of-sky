import React, { Fragment, useCallback, useEffect, useState } from 'react';
import './personality.less'
import { getbanner } from '../../api/home'
import { Carousel, RadioGroup, Radio, Space, Typography } from '@douyinfe/semi-ui';

const Personality = () => {

  const [data, setData] = useState([])
  const { Title, Paragraph } = Typography;
  const [arrowType, setArrowTypew] = useState('always');
  const [show, setShow] = useState(true);
  const style = {
    width: '100%',
    height: '400px',
  };

  const titleStyle = {
    position: 'absolute',
    top: '100px',
    left: '100px',
  };

  const colorStyle = {
    color: '#1C1F23',
  };

  const renderLogo = () => (
    <img src='https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg' alt='semi_logo' style={{ width: 87, height: 31 }}/>
  );

  const imgList = [
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png',
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png',
    'https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png',
  ];

  const textList = [
    ['Semi 设计管理系统', '从 Semi Design，到 Any Design', '快速定制你的设计系统，并应用在设计稿和代码中'],
    ['Semi 物料市场', '面向业务场景的定制化组件，支持线上预览和调试', '内容由 Semi Design 用户共建'],
    ['Semi Pro (开发中)', '基于 40+ 真实组件代码设计', '海量页面模板前端代码一键转'],
  ];

  const getImg = useCallback(async(params) => {
    const res = await getbanner(params)
    if (res.code === 200) {
      console.log(res);
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
            <Carousel style={style} showArrow={show} arrowType={arrowType} theme='dark' autoPlay={false}>
              {
                imgList.map((src, index) => (
                  <div key={index} style={{ backgroundSize: 'cover', backgroundImage: `url(${src})` }}>
                    <Space vertical align='start' spacing='medium' style={titleStyle}>
                      {renderLogo()}
                      <Title heading={2} style={colorStyle}>{textList[index][0]}</Title>
                      <Space vertical align='start'>
                        <Paragraph style={colorStyle}>{textList[index][1]}</Paragraph>
                        <Paragraph style={colorStyle}>{textList[index][2]}</Paragraph>
                      </Space>
                    </Space>
                  </div>
                ))
              }
            </Carousel>
          </header>
        </div>
      </div>
    </Fragment>
  )
}

export default Personality
