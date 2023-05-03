import React from 'react'
import PublicLayout from '../../layouts/public'
import './index.scss'
import missingImg from '../../assets/images/missing.png';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const MissingPage: React.FC = () => {
  return (
    <PublicLayout className="missingPage">
        <div className="missingContainer">
          <img src={missingImg} alt="404" />
          <Typography.Title level={2}>
            404
          </Typography.Title>
          <Typography.Paragraph>
            The page you are looking for doesn't exist or still is in development. Go to <Link to='/'>home page</Link>.
          </Typography.Paragraph>
        </div>
    </PublicLayout>
  )
}

export default MissingPage