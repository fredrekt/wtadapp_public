import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Card, Col, Form, Row, Typography, Button, Input } from 'antd';

const HelpPage: React.FC = () => {

	const onFinish = async () => {

	}

	return (
		<AdminLayout className="helpPage">
			<div className="helpPageContent">
				<Row>
					<Col span={10}>
						<Card>
						<Typography.Title className='formTitle' level={4}>Create a ticket</Typography.Title>
							<Form
								className='helpFormContainer'
								name="basic"
								labelCol={{ span: 8 }}
								labelAlign='left'
								wrapperCol={{ span: 24 }}
								style={{ maxWidth: 600 }}
								initialValues={{ remember: true }}
								onFinish={onFinish}
								autoComplete="off"
								colon={false}
							>
								<Form.Item
									name="username"
								>
									<Input.TextArea
										rows={10}
										placeholder="Type the problem or support you need so that we can provide assistance."
									/>
								</Form.Item>

								<Form.Item className='formCta' wrapperCol={{ span: 4 }}>
									<Button type="primary" htmlType="submit">
										Send
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

export default HelpPage;
