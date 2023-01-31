import React, { Fragment, useState, useContext } from 'react';
import { Button, Layout, Slider  } from '@douyinfe/semi-ui';
import Icon, { IconSort, IconPause, IconPlay, IconFastForward, IconBackward, IconSetting } from '@douyinfe/semi-icons';
import './footer.less'
const Footer = (props) => {

  const [data, setData] = useState([])
  const [playCircl, setPlayCircle] = useState(false)


  // 暂停按钮
  const hanldeSuspend = () => {
    console.log('暂停 换成播放按钮');
    setPlayCircle(true)
  }
  // 播放按钮
  const hanldePlay = () => {
    console.log('播放 换成暂停按钮');
    setPlayCircle(false)
  }


  return (
    <Fragment>
      <div className='footerbox'>
        <div className='foottext'>
          <div className='btnsong' onClick={props.handleBaby}>
            <IconSort className='iconsort' />
          </div>
          <div className='textmain'>
            <div style={{fontSize: 18}}>上帝</div>
            <div style={{fontSize: 13}}>橘子</div>
          </div>
        </div>
        <div className='audiooutBox'>
          <audio
            autoPlay
          >
          </audio>
          <div className='audiobox'>
            <div className='btnsaudio'>
              <IconBackward className='ii' />
              {playCircl === false ? <IconPause className='ii' onClick={hanldeSuspend} /> : <IconPlay className='ii' onClick={hanldePlay}/>}
              <IconFastForward className='ii' />
            </div>
            <div className='sliderbox'>
              <Slider
                className='skuderstyle'
                max={500}
                min={0}
                // marks={{ 20: '20°C', 40: '40°C' }}
              ></Slider>
            </div>
          </div>
        </div>
        <div>
          <IconSetting style={{
            fontSize: 30,
          }} />
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
