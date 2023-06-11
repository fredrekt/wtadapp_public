import React, { useState } from 'react';
import './CreateVisitStampPopup.scss';
import { Button, Col, InputNumber, Modal, Row } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

interface CreateVisitStampPopupProps {
	opened: boolean;
	onCancel: () => void;
}

const CreateVisitStampPopup: React.FC<CreateVisitStampPopupProps> = ({ opened, onCancel }) => {
	const [phoneNumber, setPhoneNumber] = useState<any>();
	const onCreate = async () => {};
	return (
		<Modal
			title="Add a new visit stamp for a customer"
			open={opened}
			onCancel={onCancel}
			cancelText="Cancel"
			centered
			className="createVisitStampPopup"
			okText="Create"
			onOk={onCreate}
			footer={null}
		>
			<Row gutter={[16, 16]} className="createVisitStampContent">
				<Col span={19}>
					<InputNumber
						className="phoneNumberVisit"
						value={phoneNumber}
						placeholder="+966"
						onChange={(e) => setPhoneNumber(e)}
					/>
				</Col>
				<Col span={5}>
					<Button type="primary" icon={<PlusSquareOutlined />} onClick={onCreate} size="large" />
				</Col>
			</Row>

			<Row gutter={[16, 16]} justify={'end'} className="createVisitStampFooter">
				<Col xs={24} sm={24} md={6} lg={5} xl={5} xxl={5}>
					<Button type="primary" onClick={onCancel}>
						Cancel
					</Button>
				</Col>
			</Row>
		</Modal>
	);
};

export default CreateVisitStampPopup;
