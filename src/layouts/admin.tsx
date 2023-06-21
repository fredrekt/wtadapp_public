import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect } from 'react';
import SideNav from '../components/sidenav/SideNav';
import appLogo from '../assets/images/logo_white.png';
import './admin.scss';
import { useLocation } from 'react-router-dom';

interface AdminLayoutProps {
	className: string;
	children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, className }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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
