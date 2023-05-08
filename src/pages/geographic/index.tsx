import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Card, Col, Row, Typography, Form, Input, Button } from 'antd';

const GeographicPage: React.FC = () => {
	const onFinish = async () => {

	}
	return (
		<AdminLayout className="geographicPage">
			<div className='geographicContent'>
				<Row gutter={[16 ,16]}>
					<Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
						<Card className='fullHeightCard'>
							<Typography.Title className='formTitle' level={4}>Geographic</Typography.Title>
							<Form
								className='geographicFormContainer'
								name="basic"
								labelCol={{ span: 12 }}
								labelAlign='left'
								wrapperCol={{ span: 12 }}
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
												Message
											</Typography.Title>
											<Typography.Paragraph>
												Notification that appears to customers close to your business.
											</Typography.Paragraph>
										</div>
									}
									name="username"
								>
									<Input.TextArea rows={3} />
								</Form.Item>

								<Form.Item className='formCta' wrapperCol={{ xs: 6, sm: 6, md: 8, lg: 4, xl: 4, xxl: 4 }}>
									<Button type="primary" htmlType="submit">
										Save
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
					<Col className='mapContent' xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
						<Card>
							<Typography.Title className='mapTitle' level={4}>Map</Typography.Title>
							<iframe title="sampleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14934509.338896776!2d36.04889435051902!3d23.95618070781279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sph!4v1683368418707!5m2!1sen!2sph" height="450" style={{ border: 0, width: `100%` }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</Card>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default GeographicPage;
