import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import SideNav from '../components/sidenav/SideNav';

interface AdminLayoutProps {
	className: string;
	children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	return (
		<Layout className={`wtdAdminLayout ${className}`}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<SideNav />
			</Sider>
			<Content>{children}</Content>
		</Layout>
	);
};

export default AdminLayout;
