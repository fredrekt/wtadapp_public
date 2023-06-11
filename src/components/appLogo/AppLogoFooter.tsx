import React from 'react';
import './AppLogoFooter.scss';
import appLogo from '../../assets/images/iwan-dal-logo-AVLGRRJkqvs8e6wk.png-2.png';
import { Typography } from 'antd';

const AppLogoFooter: React.FC = () => {
	return (
		<div className="appLogoFooterContainer">
			<img src={appLogo} alt="logo" className="publicFooterCopyrightImg" />
			<Typography.Text className="publicFooterCopyrightTxt">All copyrights reserved</Typography.Text>
		</div>
	);
};

export default AppLogoFooter;
