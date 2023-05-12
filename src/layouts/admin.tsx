import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import SideNav from '../components/sidenav/SideNav';
import appLogo from '../assets/images/logo_white.png';

interface AdminLayoutProps {
	className: string;
	children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	return (
		<Layout className={`wtdAdminLayout ${className}`}>
			<Sider
				style={{
					backgroundColor: `#401BFF`
				}}
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<img src={appLogo} alt="logo" className="appLogoSidenav" />
				<SideNav />
			</Sider>
			<Content>{children}</Content>
		</Layout>
	);
};

export default AdminLayout;
