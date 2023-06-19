import React, { useState } from 'react';
import './index.scss';
import { Button, Card, Col, Input, Row, Typography, message } from 'antd';
import PublicLayout from '../../layouts/public';
import AppLogo from '../../components/appLogo/AppLogo';

const ForgotPasswordPage: React.FC = () => {
	const [email, setEmail] = useState<string>('');

	const onForgetPassword = async () => {
		if (!email) {
			message.error('Must provide an email to retrieve account.');
			return;
		}
		message.success(`Reset link has been sent to your email.`);
	};

	return (
		<PublicLayout className="forgotPasswordPage">
			<Row className="forgotPasswordContainer" justify={'center'} align={'middle'}>
				<Col xs={20} sm={20} md={12} lg={9} xl={7} xxl={5}>
					<Card className="forgotPasswordCardContainer">
						<AppLogo />
						<Typography.Paragraph className="forgotPasswordSubTxt">
							Enter your email, and we'll send you a link to reset your password.
						</Typography.Paragraph>
						<Input
							size="large"
							className="forgotPasswordEmail"
							value={email}
							onChange={(e: any) => setEmail(e.target.value)}
							placeholder="Email Address"
						/>
						<Row className="forgotPasswordCta" align="middle" justify={'center'}>
							<Col xs={15} sm={15} md={12} lg={12} xl={12} xxl={12}>
								<Button onClick={onForgetPassword} type="primary" size="large">
									Send Reset Link
								</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</PublicLayout>
	);
};

export default ForgotPasswordPage;
