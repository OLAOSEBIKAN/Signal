import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './layout.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { ReactComponent as Photo } from '../../img/photo.svg';
import { ReactComponent as Dashboard } from '../../img/dashboard.svg';
import { ReactComponent as Users } from '../../img/user.svg';
import { ReactComponent as Signal } from '../../img/signal.svg';
import { ReactComponent as Security } from '../../img/security.svg';
import { ReactComponent as Estate } from '../../img/house.svg';




const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed)
    };



    return (
        <div>
            <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
                <div className='sideHeader'>
                    <div className='logoText'>Signals</div><div className='menu'>{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}</div>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<Dashboard />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<Users />}>
                        Users
                    </Menu.Item>
                    <Menu.Item key="3" icon={<Signal />}>
                        Signals
                    </Menu.Item>
                    <Menu.Item key="4" icon={<Security />}>
                        Security
                    </Menu.Item>
                    <Menu.Item key="5" icon={<Estate />}>
                        Estate
                    </Menu.Item>
                </Menu>
                {collapsed ?
                    <div className='collapsedTextContainer' >
                        <div className='collapsedText'>Safety</div>
                    </div>
                    : <div className="logo">
                        <Photo />
                    </div>}
            </Sider>
        </div>
    );
};


export default SideBar;
