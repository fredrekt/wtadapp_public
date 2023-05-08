import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Card, Col, Row, Typography, Form, Input, Button } from 'antd';
import greyBg from '../../assets/images/grey_bg.jpg';
import addToAppleWallet from '../../assets/images/addToAppleWallet.png';

const PageFormatPage: React.FC = () => {
	const onFinish = async () => {

	}
	return (
		<AdminLayout className="pageFormatPage">
			<div className='pageFormatContent'>
				<Row gutter={[16 ,16]}>
					<Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
						<Card>
							<Typography.Title className='formTitle' level={4}>Page format</Typography.Title>
							<Form
								className='pageFormatFormContainer'
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

								<Form.Item
									className='customFormRowInputContainer'
									label={
										<div className='customLabel'>
											<Typography.Title level={5}>
												Message
											</Typography.Title>
											<Typography.Paragraph>
												A message appears on the card add page.
											</Typography.Paragraph>
										</div>
									}
									name="username"
								>
									<Input.TextArea rows={3} />
								</Form.Item>

								<Form.Item className='formCta' wrapperCol={{ span: 4 }}>
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
					<Col className='logoContent' xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
						<Card className='fullHeightCard'>
							<Typography.Title className='mapTitle' level={4}>LOGO</Typography.Title>
							<div className="imgContainer">
								<img className='pageFormatImg' src={greyBg} alt="placeholder under logo" />
							</div>
							<Typography.Paragraph className='pageFormatSubText'>Write a weclome text that appears for your customers to download the card.</Typography.Paragraph>
							<div className="ctaFooter">
								<img className='ctaAddToAppleWallet' src={addToAppleWallet} alt="add to apple wallet" />
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default PageFormatPage;
