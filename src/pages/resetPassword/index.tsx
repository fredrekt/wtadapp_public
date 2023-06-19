import React, { useState } from 'react';
import './index.scss';
import { Button, Card, Col, Input, Row, Typography, message } from 'antd';
import PublicLayout from '../../layouts/public';
import AppLogo from '../../components/appLogo/AppLogo';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
	const navigate = useNavigate();
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');

	const onForgetPassword = async () => {
		if (!password || !cpassword) {
			message.error(`Must provide new password.`);
			return;
		}
		if (password !== cpassword) {
			message.error('Passwords must match!');
			return;
		}
		message.success(`Successfully changed your password.`);
		setTimeout(() => {
			navigate('/login');
		}, 1000)
	};

	return (
		<PublicLayout className="resetPasswordPage">
			<Row className="resetPasswordContainer" justify={'center'} align={'middle'}>
				<Col xs={20} sm={20} md={12} lg={9} xl={7} xxl={5}>
					<Card className="resetPasswordCardContainer">
						<AppLogo />
						<Typography.Paragraph className="resetPasswordSubTxt">
							Enter your new password for your account.
						</Typography.Paragraph>
						<Input.Password
							className="resetPassword"
							size="large"
							value={password}
							placeholder="Password"
							onChange={(e: any) => setPassword(e.target.value)}
						/>
						<Input.Password
							className="resetPassword"
							size="large"
							value={cpassword}
							placeholder="Confirm Password"
							onChange={(e: any) => setCPassword(e.target.value)}
						/>
						<Row className="resetPasswordCta" align="middle" justify={'center'}>
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

export default ResetPasswordPage;
