import React, { useState } from 'react';
import './QRCode.scss';
import { QRCode, Typography, theme, Button, message } from 'antd';
import { WarningFilled } from '@ant-design/icons';

interface QRCodeProps {}

const { useToken } = theme;

const QRCodeComponent: React.FC<QRCodeProps> = () => {
	const [qrValue, setQrValue] = useState<string>('h');
 	const { token } = useToken();

	const copyLink = () => {
		navigator.clipboard.writeText(qrValue);
		setQrValue('s');
		message.success('Link copied.')
	}

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
				<Button className='qrCta' onClick={copyLink} type="primary">Copy link</Button>
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
				<Typography.Paragraph>
					All rights reserved ©
				</Typography.Paragraph>
			</div>
		</div>
	);
};

export default QRCodeComponent;
