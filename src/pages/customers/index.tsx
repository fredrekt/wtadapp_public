import React from 'react';
import './index.scss';
import AdminLayout from '../../layouts/admin';
import { Button, Card, Col, Row, Select, Table, Typography, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PhoneOutlined, MessageOutlined, WechatOutlined } from '@ant-design/icons';

interface DataType {
	key: string;
	name: string;
	points: number;
}

const CustomersPage: React.FC = () => {
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

	return (
		<AdminLayout className="customersPage">
			<div className="customerPageContent">
				<Row className="pageHeaderCta" align={'middle'} justify="end">
					<Col lg={2} xl={2} xxl={2}>
						<Button type="primary">Export</Button>
					</Col>
				</Row>

				<Card className="customerCardFilter">
					<Row gutter={[16, 16]} className="pageHeaderFilters" align={'middle'}>
						<Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
							<Typography.Title className="filterTitle" level={4}>
								Customers
							</Typography.Title>
						</Col>
						<Col xs={8} sm={8} lg={4} xl={4} xxl={4}>
							<Select
								className="filterSelect"
								placeholder={'A-Z'}
								options={[
									{
										value: 'A-Z'
									},
									{
										value: 'Z-A'
									},
									{
										value: 'New'
									},
									{
										value: 'Old'
									}
								]}
							/>
						</Col>
						<Col xs={8} sm={8} lg={4} xl={4} xxl={4}>
							<Select
								className="filterSelect"
								placeholder={'Higher'}
								options={[
									{
										value: 'A-Z'
									}
								]}
							/>
						</Col>
						<Col xs={8} sm={8} lg={4} xl={4} xxl={4}>
							<Select
								className="filterSelect"
								placeholder={'Man'}
								options={[
									{
										value: 'A-Z'
									}
								]}
							/>
						</Col>
					</Row>
				</Card>

				<Card className="customerCardTable">
					<Row>
						<Col span={24}>
							<Table columns={columns} dataSource={data} />
						</Col>
					</Row>
				</Card>
			</div>
		</AdminLayout>
	);
};

export default CustomersPage;
