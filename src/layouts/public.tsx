import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import React from 'react';
import AppLogoFooter from '../components/appLogo/AppLogoFooter';

interface PublicLayoutProps {
	className: string;
	children: React.ReactNode;
	register?: boolean;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children, className, register }) => {
	return (
		<Layout className={`wtdLayout ${className}`}>
			<Content>
				{children}
			</Content>
			{!register && <Footer className='wtdPublicFooter'>
				<AppLogoFooter/>
			</Footer>}
		</Layout>
	);
};

export default PublicLayout;
