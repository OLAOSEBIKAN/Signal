import { Layout} from 'antd';
import React, { useState } from "react";
import "./layout.css";
import SideBar from "./sideBar";
import LayoutHeader from "./header"

const {Content } = Layout;


const Structure = () => {

    return (
        <Layout className='layout'>
            <div>
                <SideBar />
            </div>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <div>
                    <LayoutHeader/>
                </div>
                <Content style={{ margin: '30px', overflow: 'initial'}}>
                    <div  style={{ padding: 24, textAlign: 'center', height: '500px'}} >
                        Content
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Structure;


