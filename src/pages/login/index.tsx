import React, { useState } from 'react';
import './index.scss';
import { Button, Card, Col, Input, Row, Space, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import PublicLayout from '../../layouts/public';
import AppLogo from '../../components/appLogo/AppLogo';

const LoginPage: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onSubmit = async () => {
		// function api here for login
		localStorage.setItem('loggedIn', 'dummyLogin');
		navigate('/');
		message.success('Successfully logged in.');
	};

	return (
		<PublicLayout className="loginPage">
			<Row className="loginContainer" justify={'center'} align={'middle'}>
				<Col xs={20} sm={20} md={12} lg={5} xl={5} xxl={5}>
					<Card className="loginCardContainer">
						<AppLogo />
						<Input
							className="loginEmail"
							size="large"
							value={email}
							placeholder="E-mail"
							onChange={(e: any) => setEmail(e.target.value)}
						/>
						<Input.Password
							className="loginPassword"
							size="large"
							value={password}
							placeholder="Password"
							onChange={(e: any) => setPassword(e.target.value)}
						/>
						<Row className="loginCta" align="middle" justify={'center'}>
							<Col xs={15} sm={15} md={12} lg={12} xl={12} xxl={12}>
								<Button size="large" onClick={() => onSubmit()} type="primary">
									Login
								</Button>
							</Col>
						</Row>
						<Row className="createAccount" align="middle" justify={'center'}>
							<Col xs={15} sm={15} md={12} lg={12} xl={12} xxl={12}>
								<Link to="/register">
									<Button size="large">Create an account</Button>
								</Link>
							</Col>
						</Row>
						<Space className="forgotPassword">
							<Link to="/forgot-password">Forgot your password?</Link>
						</Space>
					</Card>
				</Col>
			</Row>
		</PublicLayout>
	);
};

export default LoginPage;
