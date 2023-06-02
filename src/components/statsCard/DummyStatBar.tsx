import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';

interface DummyStatBarProps {
	className: string;
}

const DummyStatBar: React.FC<DummyStatBarProps> = ({ className }) => {
	const chartRef = useRef<any>(null);

	const chartData = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Dataset 1',
				data: [0, 20, 18, 40, 36, 60, 52, 30],
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
		maintainAspectRatio: false,
		scales: {
			y: {
				display: false,
				beginAtZero: true
			},
			x: {
				display: false // Hide x-axis labels
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

	return <Line ref={chartRef} className={className} data={chartData} options={chartOptions} />;
};

export default DummyStatBar;
