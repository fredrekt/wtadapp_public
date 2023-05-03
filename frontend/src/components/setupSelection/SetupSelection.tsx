import { Card, Typography } from 'antd';
import React from 'react'
import './SetupSelection.scss'

interface SetupSelectionProps {
    activeSetup: number;
    currentSetup: number;
    label: string;
    onClick: (activeSetup: number) => void;
    children: React.ReactNode;
}

const SetupSelection: React.FC<SetupSelectionProps> = ({ activeSetup, currentSetup, label, children, onClick }) => {
    return (
        <Card onClick={() => onClick(currentSetup)} className={`setupSelectionCard ${currentSetup === activeSetup ? 'selected' : ''}`}>
            {children}
            <Typography.Text className='setupSelectionLabel'>
                {label}
            </Typography.Text>
        </Card>
    )
}

export default SetupSelection