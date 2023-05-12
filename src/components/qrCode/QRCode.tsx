import React, { useState } from 'react';
import './QRCode.scss';
import { QRCode, Typography, theme, Button, message } from 'antd';
import { WarningFilled } from '@ant-design/icons';
import appLogo from '../../assets/images/iwan-dal-logo-AVLGRRJkqvs8e6wk.png-2.png';
import CreateCustomerPopup from '../../popups/createCustomerPopup/CreateCustomerPopup';
import { PlusSquareOutlined, UserAddOutlined } from '@ant-design/icons';

interface QRCodeProps {}

const { useToken } = theme;

const QRCodeComponent: React.FC<QRCodeProps> = () => {
	const [qrValue, setQrValue] = useState<string>('h');
	const [openCreateCustomer, setOpenCreateCustomer] = useState<boolean>(false);
	const [openVisitStamp, setOpenVisitStamp] = useState<boolean>(false);
	const { token } = useToken();

	const copyLink = () => {
		navigator.clipboard.writeText(qrValue);
		setQrValue('s');
		message.success('Link copied.');
	};

	return (
		<div className="qrCodeComponent">
			<div className="qrCodeComponentHeader">
				<Typography.Title className="qrHeaderTxt" level={4}>
					Share your page
				</Typography.Title>
				<QRCode
					value={qrValue}
					color={token.colorPrimary}
					style={{
						background: `transparent`,
						border: `none`
					}}
				/>
				<Button className="qrCta" onClick={copyLink} type="primary">
					Copy link
				</Button>
			</div>
			<div className="qrCtaContent">
				<Button onClick={() => setOpenVisitStamp(true)} shape="round" icon={<UserAddOutlined/>} size="large" type='primary'/>
				<Button icon={<PlusSquareOutlined />} shape="round" size="large" type="primary" onClick={() => setOpenCreateCustomer(true)}/>
			</div>
			<div className="qrContent">
				<Typography.Paragraph>
					<WarningFilled />
					Platform updates are written here and everyone can view them.
				</Typography.Paragraph>
				<Typography.Paragraph>
					<WarningFilled />
					Platform updates are written here and everyone can view them.
				</Typography.Paragraph>
				<Typography.Paragraph>
					<WarningFilled />
					Platform updates are written here and everyone can view them.
				</Typography.Paragraph>
			</div>
			<div className="qrFooter">
				<img src={appLogo} alt="logo" className="qrFooterLogo" />
				<Typography.Paragraph>All rights reserved ©</Typography.Paragraph>
			</div>
			<CreateCustomerPopup opened={openCreateCustomer} onCancel={() => setOpenCreateCustomer(false)} />
		</div>
	);
};

export default QRCodeComponent;
