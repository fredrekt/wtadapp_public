import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import QRCodeComponent from '../../components/qrCode/QRCode';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const DashboardPage: React.FC = () => {
	return (
		<AdminLayout className="dashboardPage">
			<div className="dashboardRow">
				<div className="dashboardContent">
					<Card bordered={false}>
						<Statistic
							title="Active"
							value={11.28}
							precision={2}
							valueStyle={{ color: '#3f8600' }}
							prefix={<ArrowUpOutlined />}
							suffix="%"
						/>
					</Card>
				</div>
				<QRCodeComponent />
			</div>
		</AdminLayout>
	);
};

export default DashboardPage;
