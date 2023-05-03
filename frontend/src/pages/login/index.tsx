import React, { useState } from 'react';
import './index.scss';
import { Button, Card, Col, Input, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import PublicLayout from '../../layouts/public';

const LoginPage: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onSubmit = async () => {
		// function api here for login
	};

	return (
		<PublicLayout className="loginPage">
			<Row className="loginContainer" justify={'center'} align={'middle'}>
				<Col span={5}>
					<Card className="loginCardContainer">
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
						<Space size={12} className="loginCta" direction="vertical">
							<Button size="large" onClick={() => onSubmit()} type="primary">
								Login
							</Button>
							<Link to="/register">
								<Button size="large">Create an account</Button>
							</Link>
						</Space>
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
