import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import SideNav from '../components/sidenav/SideNav';

interface AdminLayoutProps {
    className: string;
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
  return (
    <Layout className={`wtdAdminLayout ${className}`}>
        <Sider>
            <SideNav/>
        </Sider>
        <Content>
            {children}
        </Content>
    </Layout>
  )
}

export default AdminLayout;