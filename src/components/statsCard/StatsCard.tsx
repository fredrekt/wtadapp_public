import { Card, Typography } from 'antd';
import React from 'react';
import './StatsCard.scss';
import FormatMoney from '../../utils/FormatMoney';
import DummyStatBar from './DummyStatBar';

interface StatsCardProps {
	title: string;
	label: string;
	count: number;
	newCount: number;
	positive: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, label, count, newCount, positive }) => {
	return (
		<Card bordered={false} className="statsCardContainer">
			<div className="statsCardHeader">
				<Typography.Title className="textPrimary statTitle" level={4}>
					{title}
				</Typography.Title>
				<Typography.Paragraph className="statLabel">{label}</Typography.Paragraph>
			</div>
			<div className="statsCardContent">
				<Typography.Title level={4} className="statCounter">
					{FormatMoney(count)}
				</Typography.Title>
				<Typography.Paragraph className={`statNewCount ${positive ? 'green-txt' : 'red-text'}`}>
					{`(${positive ? '+' : '-'})`} {newCount}
				</Typography.Paragraph>
			</div>
			<div className="linebarStat">
				<DummyStatBar className="statLinebar" />
			</div>
		</Card>
	);
};

export default StatsCard;
