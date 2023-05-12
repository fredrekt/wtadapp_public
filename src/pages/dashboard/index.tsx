import React, { useState } from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import QRCodeComponent from '../../components/qrCode/QRCode';
import { Card, Col, Row, Space, Statistic, Table, Typography } from 'antd';
import { ArrowUpOutlined, PhoneOutlined, MessageOutlined, WechatOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from 'chart.js';
import CreateCustomerPopup from '../../popups/createCustomerPopup/CreateCustomerPopup';

interface DataType {
	key: string;
	name: string;
	points: number;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage: React.FC = () => {
	const [openCreateCustomer, setOpenCreateCustomer] = useState<boolean>(false);
	const columns: ColumnsType<DataType> = [
		{
			title: '#',
			dataIndex: 'key',
			key: 'id',
			render: (text) => <span className="textPrimary">#{text}</span>,
			width: 50
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <span className="textPrimary">{text}</span>,
			width: 200
		},
		{
			title: 'Points',
			dataIndex: 'points',
			key: 'points',
			render: (text) => <span className="textPrimary">{text} Points</span>,
			width: 100
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<WechatOutlined />
					<PhoneOutlined />
					<MessageOutlined />
				</Space>
			),
			width: 500,
			align: 'right',
			className: 'tableActionCtas'
		}
	];

	const data: DataType[] = [
		{
			key: '1',
			name: 'John Brown',
			points: 32
		},
		{
			key: '2',
			name: 'Jim Green',
			points: 42
		},
		{
			key: '3',
			name: 'Joe Black',
			points: 32
		},
		{
			key: '1',
			name: 'John Brown',
			points: 32
		},
		{
			key: '2',
			name: 'Jim Green',
			points: 42
		},
		{
			key: '3',
			name: 'Joe Black',
			points: 32
		},
		{
			key: '1',
			name: 'John Brown',
			points: 32
		},
		{
			key: '2',
			name: 'Jim Green',
			points: 42
		},
		{
			key: '3',
			name: 'Joe Black',
			points: 32
		},
		{
			key: '1',
			name: 'John Brown',
			points: 32
		},
		{
			key: '2',
			name: 'Jim Green',
			points: 42
		},
		{
			key: '3',
			name: 'Joe Black',
			points: 32
		}
	];

	const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const
			},
			title: {
				display: true,
				text: 'Chart.js Line Chart'
			}
		}
	};
	const lineData = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: labels.map(() => 100),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: 'Dataset 2',
				data: labels.map(() => 200),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			}
		]
	};

	return (
		<AdminLayout className="dashboardPage">
			<div className="dashboardRow">
				<div className="dashboardContent">
					<Row gutter={[24, 24]}>
						<Col span={24}>
							<Typography.Title className="greetingTxt" level={2}>
								Hi Mashari, I hope you have a nice day
							</Typography.Title>
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
						</Col>
						<Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
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
						</Col>
					</Row>
					<Card className="dashboardLineGraphChart">
						<Line options={options} data={lineData} />
					</Card>
					<Card className="customerCardTable">
						<Typography.Title className="textPrimary tableTitle" level={4}>
							Last Customers
						</Typography.Title>
						<Table columns={columns} dataSource={data} />
					</Card>
				</div>
				<QRCodeComponent />
			</div>
			<CreateCustomerPopup opened={openCreateCustomer} onCancel={() => setOpenCreateCustomer(false)} />
		</AdminLayout>
	);
};

export default DashboardPage;
