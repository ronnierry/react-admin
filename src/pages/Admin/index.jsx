import React, { Component, useEffect } from 'react'
import { Layout } from 'antd';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import { getCurrentUser } from '../../service/UserService'
import './index.less'
import imgPng from '../Login/images/logo.png'
import LeftNav from '../../compent/LeftNav';
import Home from '../Home';

const { Header, Footer, Sider, Content } = Layout;
export default function Admin() {
  let navigate = useNavigate();
  useEffect(() => {
    let user = getCurrentUser()
    console.log('user', user)
    if (!user) {
      navigate('/login', { replace: true })
    }
  }, [])

  return (
    <div className='admin'>
      <Layout className='max-layout'>
        <Sider className='sider'>
          <Link to={"/"} className='logo-info'>
            <img src={imgPng}></img>
            <h1>硅谷后台</h1>
          </Link>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Routes>
              <Route path="/home" element={<Home></Home>} />
            </Routes>

          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>

  )
}
