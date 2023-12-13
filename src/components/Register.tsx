import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Typography, InputRef } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import {
  MailOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import bg3 from "../images/bg3.png";
import axios from "axios";
const { Title } = Typography;

const Register: React.FC = () => {
  const Container = styled.div`
    color: white;
  `;
  const SubContainer = styled.div`
    margin: 50px 0px 0px 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${bg3});
  `;
  const Div = styled.div`
    display: flex;
  `;
  const Span = styled.div`
    margin-left: 100px;
    & h1 {
      color: white;
      margin: 30px 0px 30px 0px;
    }
  `;
  const Section = styled.div`
    display: flex;
  `;
  const onFinish = (values: any) => {
    console.log(values);

    axios.post("http://192.168.1.94:3500/api/register", values).then((res) => {
      console.log(res);
    });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const [size, setSize] = useState<SizeType>("large");
  const inputRef = useRef<InputRef>(null);
  useEffect(() => {
    inputRef.current!.focus({
      cursor: "start",
    });
  });

  return (
    <Container id="kkk">
      <SubContainer>
        <Span>
          <Title>Create new account</Title>
        </Span>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: "0px 0px 60px 100px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Div>
            <Form.Item style={{ margin: "0px" }}>
              <Form.Item
                name="firstName"
                rules={[{ required: true }]}
                style={{ display: "inline-block", width: "calc(50% - 8px)" }}
                className="first_name"
              >
                <Input
                  size={size}
                  placeholder="first name"
                  suffix={<UserOutlined />}
                  ref={inputRef}
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true }]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input
                  size={size}
                  placeholder="last name"
                  suffix={<UserOutlined />}
                />
              </Form.Item>
            </Form.Item>
          </Div>
          <Form.Item
            name="email"
            rules={[{ required: true }, { type: "email" }]}
          >
            <Input
              type="email"
              size="large"
              placeholder="email"
              suffix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true },
              // {
              //   validator: (_, value) =>
              //     value && value.includes("A")
              //       ? Promise.resolve()
              //       : Promise.reject("Password does not match criteria."),
              // },
            ]}
          >
            <Input
              type="password"
              size="large"
              placeholder="password"
              suffix={<EyeInvisibleOutlined />}
            />
          </Form.Item>
          <Section>
            <Form.Item>
              <Button
                type="primary"
                shape="round"
                size={size}
                style={{
                  display: "inline-block",
                  width: "calc(50% + 90px)",
                  margin: "0 8px",
                  backgroundColor: "gray",
                }}
                htmlType="submit"
              >
                Change method
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                shape="round"
                size={size}
                style={{
                  display: "inline-block",
                  width: "calc(50% + 87px)",
                  margin: "0 3px",
                }}
                htmlType="submit"
              >
                Create account
              </Button>
            </Form.Item>
          </Section>
        </Form>
      </SubContainer>
    </Container>
  );
};

export default Register;
