import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Input, Select  } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import { useHistory } from 'react-router-dom';
import {
  getSerach,
} from '../api/header'
import './header.less'
const Header = () => {

  const history = useHistory()
  const [data, setData] = useState([])


  const getData = useCallback(async(params) => {
    const res = await getSerach(params)
    if (res.code === 200) {
      console.log(res);
    }
  }, [])

  useEffect(() => {
    // getData({keywords: '周杰伦'})
  }, [])

  const handleHome = () => {
    history.push('/home/personality')
  }

  const onSearch = (value) => {
    console.log(value);
  }

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
            prefix={<IconSearch />}
            showClear
            style={{width: 200}}
            onSearch={onSearch}
          >
          </Select>
        </div>
      </div>
    </Fragment>
  )
}

export default Header
