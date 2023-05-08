import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Button, Card, Col, Row, Typography, Form, Input } from 'antd';

const SettingsPage: React.FC = () => {
	const onFinish = async () => {
		
	}
	return (
		<AdminLayout className="settingsPage">
			<div className="settingsContent">
				<Row>
					<Col xs={24} sm={24} md={18} lg={10} xl={10} xxl={10}>
						<Card>
							<Typography.Title className='formTitle' level={4}>Settings</Typography.Title>
							<Form
								className='settingsFormContainer'
								name="basic"
								labelCol={{ span: 8 }}
								labelAlign='left'
								wrapperCol={{ span: 16 }}
								style={{ maxWidth: 600 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								autoComplete="off"
								colon={false}
							>
								<Form.Item
									label="Username"
									name="username"
								>
									<Input />
								</Form.Item>

								<Form.Item
									label="Business name"
									name="username"
								>
									<Input />
								</Form.Item>

								<Form.Item
									className='formButton'
									label="Change Password"
								>
									<Button type="primary">Change</Button>
								</Form.Item>

								<Form.Item
									className='formButton'
									label="Change Email"
								>
									<Button type="primary">Change</Button>
								</Form.Item>

								<Form.Item
									className='formButton'
									label="Change Mobile number"
								>
									<Button type="primary">Change</Button>
								</Form.Item>

								<Form.Item className='formCta' wrapperCol={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 4 }}>
									<Button type="primary" htmlType="submit">
										Save
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default SettingsPage;
