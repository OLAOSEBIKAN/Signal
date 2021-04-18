import { Layout } from 'antd';
import React, { useState } from "react";
import "../layout/layout.css";
import SideBar from "../layout/sideBar";
import LayoutHeader from "../layout/header"

const { Content } = Layout;


const Estate = () => {

    return (
        <Layout className='layout'>
            <div>
                <SideBar />
            </div>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <div>
                    <LayoutHeader />
                </div>
                <Content style={{ margin: '30px', overflow: 'initial' }}>
                    <div style={{ padding: 24, textAlign: 'center', height: '500px' }} >
                        Estate
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Estate;


