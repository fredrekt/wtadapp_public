import { Card, Typography, Modal } from 'antd';
import React, { useState } from 'react';
import './SetupSelection.scss';

const { confirm } = Modal;

interface SetupSelectionProps {
	activeSetup: number;
	currentSetup: number;
	label: string;
	onClick: (activeSetup: number) => void;
	imgSrc: string;
	imgSrcHovered: string;
}

const SetupSelection: React.FC<SetupSelectionProps> = ({
	activeSetup,
	currentSetup,
	label,
	imgSrc,
	imgSrcHovered,
	onClick
}) => {
	const [hovered, setHovered] = useState<boolean>(false);

	const showConfirm = () => {
		confirm({
			title: 'Continue setup plan',
			content: currentSetup === 1 ? 'For every riyal spent, they will earn points.' : 'Each time a customer visits, they will receive a stamp.',
			centered: true,
			okText: 'Accept',
			cancelText: 'Cancel',
			onOk() {
				console.log('OK');
				onClick(currentSetup);
			},
			onCancel() {
				console.log('Cancel');
			}
		});
	};

	return (
		<Card
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={showConfirm}
			className={`setupSelectionCard ${currentSetup === activeSetup ? 'selected' : ''}`}
		>
			<div className="setupSelectionAsset">
				<img
					src={
						hovered
							? imgSrcHovered
							: currentSetup === activeSetup && (!hovered || hovered)
							? imgSrcHovered
							: imgSrc
					}
					alt="points"
				/>
			</div>
			<Typography.Text className="setupSelectionLabel">{label}</Typography.Text>
		</Card>
	);
};

export default SetupSelection;
