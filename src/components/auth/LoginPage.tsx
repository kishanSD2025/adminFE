import React from 'react';
import { Form, Input, Button, Typography, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: LoginFormValues) => {
    console.log('Login form submitted:', values);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* WordPress-style Logo/Brand Area */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <UserOutlined className="text-white text-xl" />
            </div>
          </div>
          <Title level={1} className="text-white text-4xl font-light mb-2">
            MyApp
          </Title>
          <Text className="text-blue-100 text-lg">
            Powered by React & Ant Design
          </Text>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="text-center mb-6">
            <Title level={3} className="text-gray-800 mb-2 font-normal">
              Log In
            </Title>
          </div>

          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            className="space-y-4"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your username or email address!' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Username or Email Address"
                className="h-12 rounded-md border-gray-300 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                className="h-12 rounded-md border-gray-300 focus:border-blue-500"
              />
            </Form.Item>

            <div className="flex items-center justify-between mb-6">
              <Form.Item name="remember" valuePropName="checked" className="mb-0">
                <Checkbox className="text-gray-600">
                  Remember Me
                </Checkbox>
              </Form.Item>
            </div>

            <Form.Item className="mb-4">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 rounded-md font-medium text-lg shadow-lg"
              >
                Log In
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center space-y-4">
            <Link href="#" className="text-blue-600 hover:text-blue-700 text-sm">
              Lost your password?
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <Text className="text-gray-600 text-sm">
                ← <Link href="#" className="text-blue-600 hover:text-blue-700">
                  Back to MyApp
                </Link>
              </Text>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 space-x-4">
          <Link href="#" className="text-blue-200 hover:text-white text-sm">
            Privacy Policy
          </Link>
          <span className="text-blue-300">•</span>
          <Link href="#" className="text-blue-200 hover:text-white text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;