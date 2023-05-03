import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Button, Card, Col, Row, Typography } from 'antd';

const SettingsPage: React.FC = () => {
	const onSave = async () => {
		
	}
	return (
		<AdminLayout className="settingsPage">
			<div className="settingsContent">
				<Row>
					<Col span={10}>
						<Card>
							<Typography.Title level={4}>Settings</Typography.Title>
							<Button onClick={onSave} type='primary'>Save</Button>
						</Card>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default SettingsPage;
