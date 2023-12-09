import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import {UserOutlined, MailOutlined} from '@ant-design/icons';
import '../style.css'; 


const { Title } = Typography;
const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const Register: React.FC = () => {

  return (
<div style={{marginLeft:"50px", marginTop:"40px"}}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
    {/* <Title level={5} >START FOR FREE</Title> */}
    <Title level={1} style={{fontFamily:"cursive"}}>Create new account</Title>
    <Title level={5}>Already A Member? &nbsp; <a href='#'>Login</a></Title>
  </div><br/>

  <Form 
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >

    <Form.Item style={{ marginBottom: 0}} >
      <Form.Item
        name="firstName"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
        <Input placeholder='First name' style={{border:"1px solid #a3a3c2", borderRadius:"15px", height:"50px", backgroundColor:"#a3a3c2", fontFamily:"cursive" }}
        // prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <Form.Item
        name="LastName"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Input placeholder="Last name" style={{border:"1px solid #a3a3c2", borderRadius:"15px", height:"50px", backgroundColor:"#a3a3c2", fontFamily:"cursive" }}/>
      </Form.Item>
    </Form.Item>
    <Form.Item >
        <Form.Item
          name="Email"
          noStyle
          rules={[{ required: true, message: 'Email is required' }]}
        >
          < Input placeholder="Email" style={{border:"1px solid #a3a3c2", borderRadius:"15px", height:"50px", backgroundColor:"#a3a3c2", fontFamily:"cursive", color:"GrayText"}} 
          // prefix={<UserOutlined />}
          />
        </Form.Item>
    </Form.Item>

    <Form.Item >
        <Form.Item
          name="password"
          noStyle
          rules={[{ required: true, message: 'Password is required' }]}
        >
          <Input placeholder="Please input your Password"  style={{border:"1px solid #a3a3c2", borderRadius:"15px", height:"50px", backgroundColor:"#a3a3c2", fontFamily:"cursive"}}  />
        </Form.Item>
    </Form.Item>

  <Form.Item label="" style={{ marginBottom: 0 }}>
  <Form.Item label=" " colon={false}  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
    <Button htmlType="submit" style={{border:"1px solid #c2c2d6", borderRadius:"30px", height:"50px", width:"180px", backgroundColor:"#c2c2d6"}}>
      Create Account
    </Button>
  </Form.Item>

  <Form.Item label=" " colon={false} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
    <Button type="primary"  htmlType="submit" style={{border:"1px solid #3399ff", borderRadius:"30px", height:"50px", width:"180px", backgroundColor:"#3399ff"}}>
      Change method
    </Button>
  </Form.Item>
  </Form.Item>

  </Form>
  </div>
)  
};

export default Register;