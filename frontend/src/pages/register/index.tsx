import React, { useState } from 'react';
import './index.scss';
import PublicLayout from '../../layouts/public';
import { Button, Card, Col, Input, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        password: '',
        phone: ''
    });

    const onRegister = async () => {

    }

    const {
        businessName,
        email,
        password,
        phone
    } = formData;

    const onChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <PublicLayout className='registerPage'>
            <Row className='registerContainer' justify={'center'} align={'middle'}>
                <Col span={5}>
                    <Card className='registerCardContainer'>
                        <Input className='registerBusinessName' name="businessName" size='large' value={businessName} placeholder='Business name' onChange={onChange} />
                        <Input className='registerEmail' name="email" size='large' value={email} placeholder='E-mail' onChange={onChange} />
                        <Input.Password className='registerPassword' name="password" size="large" value={password} placeholder='Password' onChange={onChange} />
                        <Input className='registerPhone' name="phone" size='large' value={phone} placeholder='Mobile number' onChange={onChange} />
                        <Space size={12} className='registerCta' direction="vertical">
                            <Button size="large" onClick={() => onRegister()} type="primary">Register now</Button>
                        </Space>
                        <Space className='registerTxtContainer'>
                            <Typography.Text className="registerTxt">
                                Your registration means that you agree to the terms and conditions.
                            </Typography.Text>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </PublicLayout>
    )
}

export default RegisterPage