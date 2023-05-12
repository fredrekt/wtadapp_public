import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import AppLogoFooter from '../components/appLogo/AppLogoFooter';

interface PublicLayoutProps {
	className: string;
	children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, className }) => {
	return (
		<Layout className={`wtdLayout ${className}`}>
			<Content>{children}</Content>
			<AppLogoFooter/>
		</Layout>
	);
};

export default PublicLayout;
