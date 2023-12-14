import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
import { axiosClient } from '../AxiosInstance';
import { UserContext } from '../context/user-context';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const App: React.FC = () => {
  let navigate = useNavigate();
  const { setIsAuthenticated, setAccessToken, setUser } =
    useContext(UserContext);

  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const onFinish = (values: any) => {
    axiosClient
      .post('/login', values)
      .then(res => {
        localStorage.setItem('access', res.data.accessToken);
        localStorage.setItem('refresh', res.data.refreshToken);
        setAccessToken(res.data.accessToken);
        setIsAuthenticated(true);
        setUser(res.data.user);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [size, setSize] = useState<SizeType>('large');
  return (
    <Div>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          marginTop: '10%',
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item name='email' label='Email'>
          <Input size={size} placeholder='enter your email ' />
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input size={size} placeholder='enter your password' />
        </Form.Item>

        <Form.Item<FieldType>
          // name="remember"
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Div>
  );
};

export default App;
