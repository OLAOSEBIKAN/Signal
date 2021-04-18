import React from 'react';
import { Layout, Input, Badge, Avatar } from 'antd';
import './layout.css';
import {
    BellOutlined,
    UserOutlined
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

const LayoutHeader = () => {
    const onSearch = value => console.log(value);

    return (
        <Header className="header" style={{ padding: 0 }}>
            <div className='headerContent'>
                <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ marginLeft: 10 }} />
                <Badge count={3}><div className='bellCountainer' ><BellOutlined /></div></Badge>
                <h3 className='headerText'>Hello,User</h3>
                <Avatar icon={<UserOutlined />} className='avatar' shape="square" />
            </div>
        </Header>
    );
};


export default LayoutHeader;
