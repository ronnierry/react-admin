import React, { Component } from 'react'
import { Menu, Button } from 'antd';

import { Link } from 'react-router-dom';

import menuConfig from '../../config/menu';
import './index.less'

const { SubMenu } = Menu;

const getMenu = (menuConfig) => {
    return menuConfig.map(x => {
        console.log('x', x)
        if (!x.children) {
            return (
                <Menu.Item key={x.name}>
                    <Link to={x.path}>
                        <span className='menu-icon'>{x.icon ? <x.icon></x.icon> : null}</span>
                        {x.name}
                    </Link>
                </Menu.Item>
            )
        } else {
            return (
                <SubMenu key={x.name} icon={<x.icon></x.icon>} title={x.name}>
                    {getMenu(x.children)}
                </SubMenu>
            )
        }
    })
}


export default class LeftNav extends Component {
    render() {
        return (


            <div className='leftNav' style={{ width: 256 }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    {getMenu(menuConfig)}
                </Menu>
            </div>
        );
    }
}
