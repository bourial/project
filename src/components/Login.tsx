import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";
import axios from "axios";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const App: React.FC = () => {
  let navigate = useNavigate();

  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const onFinish = (values: any) => {
    console.log(values);
    axios.post("http://192.168.1.94:3500/api/login", values).then((res) => {
      localStorage.setItem("access", res.data.accessToken);
      localStorage.setItem("refresh", res.data.refreshToken);
      navigate("/");
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [size, setSize] = useState<SizeType>("large");
  return (
    <Div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{
          maxWidth: 600,
          marginTop: "10%",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="email" label="Email">
          <Input size={size} placeholder="enter your email " />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input size={size} placeholder="enter your password" />
        </Form.Item>

        <Form.Item<FieldType>
          // name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Div>
  );
};

export default App;
