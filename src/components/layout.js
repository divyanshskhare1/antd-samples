import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, DatePicker } from 'antd';
import SideGrid from './sidegrid';
import 'antd/dist/antd.css';
import Tables from '../Pages/Table';

const { Header, Content, Footer, Sider } = Layout;

class Layot extends Component {
    
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible><SideGrid/></Sider>  
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
                <Tables/>
              </div>            
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }

  export default Layot;