import React, { useState } from 'react';
import './index.scss';
import PublicLayout from '../../layouts/public';
import { Button, Card, Col, Input, Row, Space, Typography, message } from 'antd';
import SetupSelection from '../../components/setupSelection/SetupSelection';
import sittingImg from '../../assets/images/sitting_visit.png';
import pointsImg from '../../assets/images/points_based.png';
import { useNavigate } from 'react-router-dom';
import AppLogo from '../../components/appLogo/AppLogo';

const RegisterPage: React.FC = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState<number>(1);
	const [formData, setFormData] = useState({
		businessName: '',
		email: '',
		password: '',
		phone: ''
	});
	const [chooseSetup, setChooseSetup] = useState<number>(0);
	const [otp, setOTP] = useState<string>('');

	const onRegister = async () => {
		if (!email) {
			message.error('Must provide a valid email address.');
			return;
		}
		setStep(2);
	};

	const { businessName, email, password, phone } = formData;

	const onChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubscribe = async () => {
		localStorage.setItem('loggedIn', 'dummyLogin');
		navigate('/');
	};

	const onResend = async () => {
		message.success(`OTP resent to email.`)
	}

	const verifyOTP = async () => {
		message.success(`OTP Verified succesfully.`)
		setStep(step + 1);
	}
  
	return (
		<PublicLayout className="registerPage">
			<Row className="registerContainer" justify={'center'} align={'middle'}>
				{step === 1 && (
					<Col xs={20} sm={20} md={12} lg={5} xl={5} xxl={5}>
						<Card className="registerCardContainer">
							<AppLogo/>
							<Input
								className="registerBusinessName"
								name="businessName"
								size="large"
								value={businessName}
								placeholder="Business name"
								onChange={onChange}
							/>
							<Input
								className="registerEmail"
								name="email"
								size="large"
								value={email}
								placeholder="E-mail"
								onChange={onChange}
							/>
							<Input.Password
								className="registerPassword"
								name="password"
								size="large"
								value={password}
								placeholder="Password"
								onChange={onChange}
							/>
							<Input
								className="registerPhone"
								name="phone"
								size="large"
								value={phone}
								placeholder="Mobile number"
								onChange={onChange}
							/>
							<Space size={12} className="registerCta" direction="vertical">
								<Button size="large" onClick={() => onRegister()} type="primary">
									Register now
								</Button>
							</Space>
							<Space className="registerTxtContainer">
								<Typography.Text className="registerTxt">
									Your registration means that you agree to the terms and conditions.
								</Typography.Text>
							</Space>
						</Card>
					</Col>
				)}

				{step === 2 && <Col xs={20} sm={20} md={12} lg={5} xl={5} xxl={5}>
					<Card className="registerCardContainer">
						<AppLogo/>
						<Typography.Title className='verifyTitleHeader' level={5}>
							Verification number has been sent to the email
						</Typography.Title>
						<Typography.Text className='verifyEmailTxt'>
							{email} (change)
						</Typography.Text>
						<Input
							className="registerBusinessName"
							name="otp"
							size="large"
							value={otp}
							placeholder="Verification code"
							onChange={(e: any) => setOTP(e.target.value)}
						/>
						<Row className='verificationCta confirm' align='middle' justify={'center'}>
							<Col xs={15} sm={15} md={12} lg={12} xl={12} xxl={12}>
								<Button size="large" onClick={verifyOTP} type="primary">
									Confirm
								</Button>
							</Col>
						</Row>
						<Row className='verificationCta' align='middle' justify={'center'}>
							<Col xs={15} sm={15} md={12} lg={12} xl={12} xxl={12}>
								<Button onClick={onResend} type="ghost" size="large">Resend</Button>
							</Col>
						</Row>
					</Card>
				</Col>}

				{step === 3 && (
					<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
						<Card className="registerChooseSetup">
							<Typography.Title className="chooseSetupHeaderTxt" level={2}>
								Loyalty system setup
							</Typography.Title>
							<Typography.Paragraph className="chooseSetupSubTxt">
								You must choose the method of calculating points that is appropriate for your business.
							</Typography.Paragraph>
							<Row
								gutter={[
									{
										xs: 16,
										sm: 16,
										md: 24,
										lg: 40,
										xl: 40,
										xxl: 40
									},
									{
										xs: 16,
										sm: 16,
										md: 24,
										lg: 40,
										xl: 40,
										xxl: 40
									}
								]}
								align={'middle'}
								justify={'center'}
								className="chooseSetupSelectionContainer"
							>
								<Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
									<SetupSelection
										activeSetup={chooseSetup}
										currentSetup={1}
										onClick={(setup: number) => setChooseSetup(setup)}
										label="Based on points for 1 riyals"
									>
										<div className="setupSelectionAsset">
											<img src={pointsImg} alt="points" />
										</div>
									</SetupSelection>
								</Col>
								<Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
									<SetupSelection
										activeSetup={chooseSetup}
										currentSetup={2}
										onClick={(setup: number) => setChooseSetup(setup)}
										label="Based on the number of visits"
									>
										<div className="setupSelectionAsset">
											<img src={sittingImg} alt="visit" />
										</div>
									</SetupSelection>
								</Col>
							</Row>
							<div className="chooseSetupCta">
								<Button
									disabled={!chooseSetup}
									type="primary"
									size="large"
									onClick={() => setStep(step + 1)}
								>
									NEXT
								</Button>
							</div>
						</Card>
					</Col>
				)}
				
				{step === 4 && (
					<Col xs={20} sm={20} md={20} lg={20} xl={20} xxl={20}>
						<Card className="registerChooseSetup">
							<Typography.Title className="chooseSetupHeaderTxt" level={2}>
								Subscription
							</Typography.Title>
							<Typography.Paragraph className="chooseSetupSubTxt">
								We don't have many packages, just one package that has all the features. You can try the platform.
							</Typography.Paragraph>
							<div className="planPricing">
								<div className="pricingContainer">
									<Typography.Title className='textPrimary' level={1}>
										000 SAR
									</Typography.Title>
									<Typography.Text className='pricingSubTxt textPrimary'>Per month</Typography.Text>
								</div>
								<div className="pricingFeaturesList">
									<ul>
										<li>Unlimited cards</li>
										<li>Design your own cards</li>
										<li>Unlimited stamps & rewards</li>
										<li>Unlimited notifications</li>
										<li>Customize registration page</li>
										<li>Our full support</li>
										<li>Access to all our features</li>
									</ul>
								</div>
							</div>
							<div className="chooseSetupCta">
								<Button className='freeTrial' size="large" type='default'>Start trial</Button>
								<Button onClick={onSubscribe} type="primary" size="large">
									Subscribe
								</Button>
							</div>
						</Card>
					</Col>
				)}

			</Row>
		</PublicLayout>
	);
};

export default RegisterPage;
