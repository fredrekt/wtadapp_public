import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import SideNav from '../components/sidenav/SideNav';
import appLogo from '../assets/images/logo_white.png';
import './admin.scss';

interface AdminLayoutProps {
	className: string;
	children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	return (
		<Layout hasSider className={`wtdAdminLayout ${className}`}>
			<Sider
				className="adminSideNav"
				style={{
					backgroundColor: `#401BFF`,
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0
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
			<Layout className="sideLayoutContent">
				<Content>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
