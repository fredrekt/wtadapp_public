import React from 'react';
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
import StatsCard from '../../components/statsCard/StatsCard';

interface DataType {
	key: string;
	name: string;
	points: number;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardPage: React.FC = () => {
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

	const chartData = {
		labels: ['1', '2', '3', '4', '5', '6', '7'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [0, 20, 18, 40, 36, 60, 52, 30],
				backgroundColor: '#401AFE',
				borderColor: '#401AFE',
				borderWidth: 10,
				pointRadius: 0,
				fill: true
			},
			{
				label: 'Dataset 1',
				data: [2, 22, 18, 44, 37, 22, 32, 0],
				backgroundColor: '#401AFE',
				borderColor: '#401AFE',
				borderWidth: 10,
				pointRadius: 0,
				fill: true
			}
		]
	};

	const chartOptions = {
		responsive: true,
		scales: {
			y: {
				display: true,
				beginAtZero: true
			},
			x: {
				display: true // Hide x-axis labels
			}
		},
		elements: {
			line: {
				tension: 0 // Set the line tension to 0 for straight lines
			}
		},
		plugins: {
			legend: {
				display: false // Hide the legend if desired
			}
		}
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
						<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
							<StatsCard title="Total Points" count={1000} label="This month" newCount={100} positive />
						</Col>
						<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
							<StatsCard title="Total Cards" count={612} label="This month" newCount={2} positive />
						</Col>
						<Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
							<StatsCard title="Total Visits" count={92} label="This month" newCount={21} positive />
						</Col>
					</Row>
					<Card className="dashboardLineGraphChart">
						<Line data={chartData} options={chartOptions} />
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
		</AdminLayout>
	);
};

export default DashboardPage;
