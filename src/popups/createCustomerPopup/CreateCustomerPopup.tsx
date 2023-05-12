import { Col, Input, Modal, Row, Typography } from 'antd';
import React, { useState } from 'react';
import './CreateCustomerPopup.scss';

interface CreateCustomerPopupProps {
	opened: boolean;
	onCancel: () => void;
}

const CreateCustomerPopup: React.FC<CreateCustomerPopupProps> = ({ opened, onCancel }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		birthdate: ''
	});

	const { name, phone, birthdate } = formData;

	const onChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onCreate = async () => {};

	return (
		<Modal
			title="Add a new customer and create a card"
			open={opened}
			onCancel={onCancel}
			cancelText="Cancel"
			centered
			className="createCustomerPopup"
			okText="Create"
			onOk={onCreate}
		>
			<Row className="createCustomerRow firstRow" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
					<Typography.Paragraph className="createCustomerFormLabel">Name</Typography.Paragraph>
				</Col>
				<Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
					<Input type="text" name="name" value={name} onChange={onChange} />
				</Col>
			</Row>
			<Row className="createCustomerRow" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
					<Typography.Paragraph className="createCustomerFormLabel">Mobile</Typography.Paragraph>
				</Col>
				<Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
					<Input type="text" name="phone" value={phone} onChange={onChange} />
				</Col>
			</Row>
			<Row className="createCustomerRow lastRow" gutter={[16, 16]}>
				<Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
					<Typography.Paragraph className="createCustomerFormLabel">Birthday</Typography.Paragraph>
				</Col>
				<Col xs={24} sm={24} md={16} lg={18} xl={18} xxl={18}>
					<Input type="date" name="birthdate" value={birthdate} onChange={onChange} />
				</Col>
			</Row>
		</Modal>
	);
};

export default CreateCustomerPopup;
