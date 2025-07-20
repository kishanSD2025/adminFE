import React from 'react';
import { Form, Input, Button, Typography, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone, GlobalOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setCredentials } from '@features/auth/authSlice';

const { Title, Text, Link } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const onFinish = (values: LoginFormValues) => {
    console.log('Login form submitted:', values);
    
    // Simulate login success
    dispatch(setCredentials({
      user: { id: '1', email: values.username },
      token: 'mock-jwt-token'
    }));
    
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 animate-float"
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
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6 border border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <GlobalOutlined className="text-white text-lg" />
            </div>
          </div>
          <Title level={1} className="text-gray-800 text-3xl font-bold mb-2">
            Welcome Back
          </Title>
          <Text className="text-gray-600 text-base">
            Sign in to your WordPress dashboard
          </Text>
        </div>

        {/* Login Form */}
        <Card className="shadow-xl border-0 rounded-2xl backdrop-blur-sm bg-white/95">
          <div className="p-2">
          <Form
            form={form}
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            className="space-y-2"
          >
            <Form.Item
              name="username"
              label={<span className="text-gray-700 font-medium">Username or Email</span>}
              rules={[
                { required: true, message: 'Please enter your username or email' }
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Enter your username or email"
                className="h-12 rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<span className="text-gray-700 font-medium">Password</span>}
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Enter your password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                className="h-12 rounded-xl border-gray-200 hover:border-blue-400 focus:border-blue-500 transition-colors"
              />
            </Form.Item>

            <div className="flex items-center justify-between py-2">
              <Form.Item name="remember" valuePropName="checked" className="mb-0">
                <Checkbox className="text-gray-600 hover:text-blue-600">
                  Remember Me
                </Checkbox>
              </Form.Item>
              <Button type="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                Forgot Password?
              </Button>
            </div>

            <Form.Item className="mb-6 pt-2">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center pt-4 border-t border-gray-100">
            <Text className="text-gray-500 text-sm">
              Don't have an account? 
              <Link href="#" className="text-blue-600 hover:text-blue-700 ml-1 font-medium">
                Sign up
              </Link>
            </Text>
          </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;