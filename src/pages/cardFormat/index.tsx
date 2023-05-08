import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Card, Col, Row, Typography, Form, Button, QRCode } from 'antd';
import greyBg from '../../assets/images/grey_bg.jpg';

const CardFormatPage: React.FC = () => {
	const onFinish = async () => {

	}
	return (
		<AdminLayout className="cardFormatPage">
			<div className='cardFormatContent'>
				<Row gutter={[16 ,16]}>
					<Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
						<Card>
							<Typography.Title className='formTitle' level={4}>Card format</Typography.Title>
							<Form
								className='cardFormatFormContainer'
								name="basic"
								labelCol={{ span: 10 }}
								labelAlign='left'
								wrapperCol={{ span: 14 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								autoComplete="off"
								colon={false}
							>

								<Form.Item
									className='customFormRowInputContainer'
									label={
										<div className='customLabel'>
											<Typography.Title level={5}>
												Logo
											</Typography.Title>
											<Typography.Paragraph>
												Your business logo will appear at the top of the card.
											</Typography.Paragraph>
										</div>
									}
									name="username"
								>
									<Button type="text">Upload</Button>
								</Form.Item>

								<Form.Item
									className='customFormRowInputContainer'
									label={
										<div className='customLabel'>
											<Typography.Title level={5}>
												Image
											</Typography.Title>
											<Typography.Paragraph>
												An image that will appear under your business logo.
											</Typography.Paragraph>
										</div>
									}
									name="username"
								>
									<Button type="text">Upload</Button>
								</Form.Item>

								<Form.Item
									className='customFormRowInputContainer'
									label={
										<div className='customLabel'>
											<Typography.Title level={5}>
												Color
											</Typography.Title>
											<Typography.Paragraph>
												Card color for your business.
											</Typography.Paragraph>
										</div>
									}
									name="username"
								>
									<Button className='colorPicker' type="text"></Button>
								</Form.Item>

								<Form.Item className='formCta' wrapperCol={{ xs: 6, sm: 6, md: 8, lg: 4, xl: 4, xxl: 4  }}>
									<div className="formCtaMulti">
										<Button type="primary" htmlType="submit">
											Preview
										</Button>
										<Button type="primary" htmlType="submit">
											Save
										</Button>
									</div>
								</Form.Item>
							</Form>
						</Card>
					</Col>
					<Col className='cardContent' xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
						<Card className='fullHeightCard'>
							<div className="cardHeader">
								<Typography.Title className='cardTitle' level={4}>LOGO</Typography.Title>
								<div className="cardHeaderPoints">
									<Typography.Title className='pointsHeader' level={5}>
										POINTS
									</Typography.Title>
									<Typography.Paragraph className='pointsCount'>
										3000
									</Typography.Paragraph>
								</div>
							</div>
							<div className="imgContainer">
								<img className='pageFormatImg' src={greyBg} alt="placeholder under logo" />
							</div>
							<div className="cardInformation">
								<Typography.Paragraph className='cardHolderPlaceholder'>CARD HOLDER</Typography.Paragraph>
								<Typography.Paragraph className='cardHolderName'>John Wayne</Typography.Paragraph>
							</div>
							<div className="ctaFooter">
								<QRCode
									value={'qrValue'}
									color={'#000000'}
									style={{
										background: `#ffffff`,
										border: `none`,
										borderRadius: `4px`
									}}
								/>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default CardFormatPage;
