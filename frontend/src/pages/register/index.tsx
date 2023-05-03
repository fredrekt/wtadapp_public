import React, { useState } from 'react';
import './index.scss';
import PublicLayout from '../../layouts/public';
import { Button, Card, Col, Input, Result, Row, Space, Typography } from 'antd';
import SetupSelection from '../../components/setupSelection/SetupSelection';
import sittingImg from '../../assets/images/sitting_visit.png';
import pointsImg from '../../assets/images/points_based.png';
import { useNavigate } from 'react-router-dom';

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

	const onRegister = async () => {
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

	return (
		<PublicLayout className="registerPage">
			<Row className="registerContainer" justify={'center'} align={'middle'}>
				{step === 1 && (
					<Col span={5}>
						<Card className="registerCardContainer">
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
				{step !== 1 && step !== 0 && (
					<Col span={20}>
						<Card className="registerChooseSetup">
							<Typography.Title className="chooseSetupHeaderTxt" level={2}>
								{step <= 2 ? `Loyalty system setup` : 'Subscription'}
							</Typography.Title>
							<Typography.Paragraph className="chooseSetupSubTxt">
								{step <= 2
									? `You must choose the method of calculating points that is appropriate for your business.`
									: `You can test the platform for 7 days and generate loyalty cards for your customers`}
							</Typography.Paragraph>
							{step > 2 && (
								<>
									<Typography.Paragraph className="chooseSetupSubTxt">or</Typography.Paragraph>
									<Typography.Paragraph className="chooseSetupSubTxt">
										Subscribe with us and get all the features, and unlimited customers
									</Typography.Paragraph>
									<Result
										title="Feature is in progress."
										subTitle="Either this will be a pricing table or a form to enter card details."
									/>
								</>
							)}
							{step === 2 && (
								<Row
									gutter={40}
									align={'middle'}
									justify={'center'}
									className="chooseSetupSelectionContainer"
								>
									<Col span={6}>
										<SetupSelection
											activeSetup={chooseSetup}
											currentSetup={1}
											onClick={(setup: number) => setChooseSetup(setup)}
											label="Based on points for 1 riyals"
										>
											<div className="setupSelectionAsset">
												<img src={pointsImg} alt="points" />
											</div>
											{/* <Typography.Paragraph className='setupSelectionLabel header'>
                                        29, 000 POINT = 100 SAR
                                    </Typography.Paragraph> */}
										</SetupSelection>
									</Col>
									<Col span={6}>
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
							)}
							<div className="chooseSetupCta">
								{step <= 2 ? (
									<Button
										disabled={!chooseSetup}
										type="primary"
										size="large"
										onClick={() => setStep(step + 1)}
									>
										NEXT
									</Button>
								) : (
									<Button onClick={onSubscribe} type="primary" size="large">
										Subscribe now
									</Button>
								)}
							</div>
						</Card>
					</Col>
				)}
			</Row>
		</PublicLayout>
	);
};

export default RegisterPage;
