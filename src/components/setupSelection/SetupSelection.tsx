import { Card, Typography } from 'antd';
import React, { useState } from 'react';
import './SetupSelection.scss';

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

	return (
		<Card
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={() => onClick(currentSetup)}
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
			<Typography.Paragraph className="setupSelectionSubLabel">
				{currentSetup === 1
					? 'For every riyal spent, they will earn points.'
					: 'Each time a customer visits, they will receive a stamp.'}
			</Typography.Paragraph>
		</Card>
	);
};

export default SetupSelection;
