import React, { Fragment, useState, useCallback, useEffect, useRef } from 'react';
import { Select, Image  } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { useHistory } from 'react-router-dom';
import {
  getSerach,
} from '../api/header'
import './header.less'
const Header = () => {


  const de = useRef(0)
  const history = useHistory()
  const [data, setData] = useState([])


  const getData = useCallback(async(params) => {
    const res = await getSerach(params)
    if (res.code === 200) {
      console.log(res);
    }
  }, [])


  const handleHome = () => {
    history.push('/home/personality')
  }

  // 简易版防抖
  const onSearch = useCallback((value) => {
    if (!value) {return}
    if (de.current) {
      clearTimeout(de.current)
    }
    de.current = setTimeout(() => {
      // getData({keywords: value})
      console.log(de.current);
    }, 800)
  }, [])

  return (
    <Fragment>
      <div className='headerBox'>
        <div className='left_header'>
          <div className='titilebox' onClick={handleHome}>
            <div className='wyytitle'></div>
            网易云音乐
          </div>
        </div>
        <div className='inputHead'>
          <Select
            className='selectui'
            prefix={<IconSearch />}
            showClear
            onSearch={onSearch}
            filter
          >
          </Select>
        </div>
        <div className='right_header'>
          <Image className='headportrait' ></Image>WonYves
        </div>
      </div>
    </Fragment>
  )
}

export default Header
