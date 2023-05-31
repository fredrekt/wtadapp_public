import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import AppLogoFooter from '../components/appLogo/AppLogoFooter';

interface PublicLayoutProps {
	className: string;
	children: React.ReactNode;
	footerLogo?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, className, footerLogo }) => {
	return (
		<Layout className={`wtdLayout ${className}`}>
			<Content>
				{children}
				{footerLogo && <AppLogoFooter/>}
			</Content>
		</Layout>
	);
};

export default PublicLayout;
