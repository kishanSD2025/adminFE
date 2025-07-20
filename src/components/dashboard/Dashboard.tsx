import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge, Button, Card, Row, Col, Statistic, Progress, List, Typography, Space, Divider } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  PictureOutlined,
  UserOutlined,
  CommentOutlined,
  AppstoreOutlined,
  SettingOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  GlobalOutlined,
  ToolOutlined,
  TeamOutlined,
  BookOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  SecurityScanOutlined,
  CloudUploadOutlined,
  BugOutlined,
  QuestionCircleOutlined,
  HeartOutlined,
  TrophyOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Edit My Profile',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Log Out',
      onClick: onLogout,
    },
  ];

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'posts',
      icon: <FileTextOutlined />,
      label: 'Posts',
      children: [
        { key: 'all-posts', label: 'All Posts' },
        { key: 'add-post', label: 'Add New' },
        { key: 'categories', label: 'Categories' },
        { key: 'tags', label: 'Tags' },
      ],
    },
    {
      key: 'media',
      icon: <PictureOutlined />,
      label: 'Media',
      children: [
        { key: 'library', label: 'Library' },
        { key: 'add-media', label: 'Add New' },
      ],
    },
    {
      key: 'pages',
      icon: <BookOutlined />,
      label: 'Pages',
      children: [
        { key: 'all-pages', label: 'All Pages' },
        { key: 'add-page', label: 'Add New' },
      ],
    },
    {
      key: 'comments',
      icon: <CommentOutlined />,
      label: 'Comments',
      children: [
        { key: 'all-comments', label: 'All Comments' },
        { key: 'pending-comments', label: 'Pending' },
        { key: 'approved-comments', label: 'Approved' },
        { key: 'spam-comments', label: 'Spam' },
      ],
    },
    {
      key: 'appearance',
      icon: <AppstoreOutlined />,
      label: 'Appearance',
      children: [
        { key: 'themes', label: 'Themes' },
        { key: 'customize', label: 'Customize' },
        { key: 'widgets', label: 'Widgets' },
        { key: 'menus', label: 'Menus' },
        { key: 'theme-editor', label: 'Theme Editor' },
      ],
    },
    {
      key: 'plugins',
      icon: <ToolOutlined />,
      label: 'Plugins',
      children: [
        { key: 'installed-plugins', label: 'Installed Plugins' },
        { key: 'add-plugin', label: 'Add New' },
        { key: 'plugin-editor', label: 'Plugin Editor' },
      ],
    },
    {
      key: 'users',
      icon: <TeamOutlined />,
      label: 'Users',
      children: [
        { key: 'all-users', label: 'All Users' },
        { key: 'add-user', label: 'Add New' },
        { key: 'profile', label: 'Profile' },
      ],
    },
    {
      key: 'tools',
      icon: <SettingOutlined />,
      label: 'Tools',
      children: [
        { key: 'available-tools', label: 'Available Tools' },
        { key: 'import', label: 'Import' },
        { key: 'export', label: 'Export' },
        { key: 'site-health', label: 'Site Health' },
        { key: 'export-personal-data', label: 'Export Personal Data' },
        { key: 'erase-personal-data', label: 'Erase Personal Data' },
      ],
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      children: [
        { key: 'general', label: 'General' },
        { key: 'writing', label: 'Writing' },
        { key: 'reading', label: 'Reading' },
        { key: 'discussion', label: 'Discussion' },
        { key: 'media-settings', label: 'Media' },
        { key: 'permalinks', label: 'Permalinks' },
        { key: 'privacy', label: 'Privacy' },
      ],
    },
  ];

  const renderDashboardContent = () => {
    switch (selectedKey) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <Title level={2} className="text-blue-800 mb-2">
                Welcome to WordPress!
              </Title>
              <Paragraph className="text-blue-600 mb-4">
                We've assembled some links to get you started
              </Paragraph>
              <Space wrap>
                <Button type="primary" icon={<EditOutlined />}>
                  Write your first blog post
                </Button>
                <Button icon={<PlusOutlined />}>
                  Add an About page
                </Button>
                <Button icon={<EyeOutlined />}>
                  View your site
                </Button>
              </Space>
            </div>

            {/* Quick Stats */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Posts"
                    value={42}
                    prefix={<FileTextOutlined />}
                    valueStyle={{ color: '#3f8600' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Pages"
                    value={8}
                    prefix={<BookOutlined />}
                    valueStyle={{ color: '#1890ff' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Comments"
                    value={156}
                    prefix={<CommentOutlined />}
                    valueStyle={{ color: '#722ed1' }}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card>
                  <Statistic
                    title="Users"
                    value={23}
                    prefix={<UserOutlined />}
                    valueStyle={{ color: '#eb2f96' }}
                  />
                </Card>
              </Col>
            </Row>

            {/* Dashboard Widgets */}
            <Row gutter={[16, 16]}>
              <Col xs={24} lg={12}>
                <Card title="At a Glance" extra={<Button type="link">Configure</Button>}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>42 Posts</span>
                      <Button type="link" size="small">View all</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>8 Pages</span>
                      <Button type="link" size="small">View all</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>156 Comments</span>
                      <Badge count={12} size="small">
                        <Button type="link" size="small">View all</Button>
                      </Badge>
                    </div>
                    <Divider />
                    <div className="text-center">
                      <Text type="secondary">WordPress 6.4.2 running Twenty Twenty-Four theme</Text>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col xs={24} lg={12}>
                <Card title="Activity" extra={<Button type="link">View all activity</Button>}>
                  <List
                    size="small"
                    dataSource={[
                      {
                        title: 'Post "Hello World" was published',
                        time: '2 hours ago',
                        type: 'post'
                      },
                      {
                        title: 'New comment on "Getting Started"',
                        time: '4 hours ago',
                        type: 'comment'
                      },
                      {
                        title: 'User "john_doe" registered',
                        time: '1 day ago',
                        type: 'user'
                      },
                      {
                        title: 'Plugin "Contact Form 7" was activated',
                        time: '2 days ago',
                        type: 'plugin'
                      }
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <div className="flex justify-between w-full">
                          <span>{item.title}</span>
                          <Text type="secondary" className="text-xs">{item.time}</Text>
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>

              <Col xs={24} lg={12}>
                <Card title="Quick Draft" extra={<Button type="primary" size="small">Save Draft</Button>}>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="What's on your mind?"
                      className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                    />
                    <textarea
                      placeholder="Write your thoughts here..."
                      rows={4}
                      className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                </Card>
              </Col>

              <Col xs={24} lg={12}>
                <Card title="WordPress News">
                  <List
                    size="small"
                    dataSource={[
                      {
                        title: 'WordPress 6.4.2 Maintenance Release',
                        date: 'December 6, 2023'
                      },
                      {
                        title: 'State of the Word 2023',
                        date: 'December 11, 2023'
                      },
                      {
                        title: 'WordPress 6.4 "Shirley"',
                        date: 'November 7, 2023'
                      }
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <div>
                          <div className="font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                            {item.title}
                          </div>
                          <Text type="secondary" className="text-xs">{item.date}</Text>
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>

            {/* Site Health */}
            <Card title="Site Health Status" extra={<Button type="link">View site health</Button>}>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Text>Overall Performance</Text>
                    <Text strong>Good</Text>
                  </div>
                  <Progress percent={85} status="active" strokeColor="#52c41a" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-green-500 text-2xl mb-1">
                      <ThunderboltOutlined />
                    </div>
                    <Text type="secondary">Performance</Text>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-500 text-2xl mb-1">
                      <SecurityScanOutlined />
                    </div>
                    <Text type="secondary">Security</Text>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-500 text-2xl mb-1">
                      <RocketOutlined />
                    </div>
                    <Text type="secondary">SEO</Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'all-posts':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Title level={2}>Posts</Title>
              <Button type="primary" icon={<PlusOutlined />}>
                Add New
              </Button>
            </div>
            <Card>
              <List
                dataSource={[
                  { title: 'Hello World!', status: 'Published', date: '2023-12-15', author: 'Admin' },
                  { title: 'Getting Started with WordPress', status: 'Draft', date: '2023-12-14', author: 'Admin' },
                  { title: 'My First Blog Post', status: 'Published', date: '2023-12-13', author: 'Admin' },
                ]}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="link" key="edit">Edit</Button>,
                      <Button type="link" key="view">View</Button>,
                      <Button type="link" danger key="delete">Delete</Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={`${item.status} • ${item.date} • By ${item.author}`}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        );

      case 'themes':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Title level={2}>Themes</Title>
              <Button type="primary" icon={<PlusOutlined />}>
                Add New Theme
              </Button>
            </div>
            <Row gutter={[16, 16]}>
              {['Twenty Twenty-Four', 'Twenty Twenty-Three', 'Twenty Twenty-Two'].map((theme, index) => (
                <Col xs={24} sm={12} lg={8} key={theme}>
                  <Card
                    hoverable
                    cover={
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <Text className="text-white text-lg font-semibold">{theme}</Text>
                      </div>
                    }
                    actions={[
                      <Button type="link" key="activate" disabled={index === 0}>
                        {index === 0 ? 'Active' : 'Activate'}
                      </Button>,
                      <Button type="link" key="customize">Customize</Button>,
                      <Button type="link" key="details">Details</Button>,
                    ]}
                  >
                    <Card.Meta
                      title={theme}
                      description={`By WordPress Team • Version ${2024 - index}.1`}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );

      case 'installed-plugins':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Title level={2}>Plugins</Title>
              <Button type="primary" icon={<PlusOutlined />}>
                Add New Plugin
              </Button>
            </div>
            <Card>
              <List
                dataSource={[
                  { name: 'Akismet Anti-Spam', description: 'Used by millions, Akismet is quite possibly the best way in the world to protect your blog from spam.', active: true, version: '5.3' },
                  { name: 'Contact Form 7', description: 'Just another contact form plugin. Simple but flexible.', active: true, version: '5.8.4' },
                  { name: 'Yoast SEO', description: 'The first true all-in-one SEO solution for WordPress.', active: false, version: '21.8' },
                  { name: 'WooCommerce', description: 'An eCommerce toolkit that helps you sell anything.', active: false, version: '8.4.0' },
                ]}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="link" key="toggle">
                        {item.active ? 'Deactivate' : 'Activate'}
                      </Button>,
                      <Button type="link" key="edit">Edit</Button>,
                      <Button type="link" danger key="delete">Delete</Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <div className="flex items-center gap-2">
                          {item.name}
                          {item.active && <Badge status="success" text="Active" />}
                        </div>
                      }
                      description={
                        <div>
                          <Paragraph ellipsis={{ rows: 1 }}>{item.description}</Paragraph>
                          <Text type="secondary">Version {item.version}</Text>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        );

      case 'all-users':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <Title level={2}>Users</Title>
              <Button type="primary" icon={<PlusOutlined />}>
                Add New User
              </Button>
            </div>
            <Card>
              <List
                dataSource={[
                  { username: 'admin', email: 'admin@example.com', role: 'Administrator', posts: 42 },
                  { username: 'editor', email: 'editor@example.com', role: 'Editor', posts: 15 },
                  { username: 'author', email: 'author@example.com', role: 'Author', posts: 8 },
                  { username: 'contributor', email: 'contributor@example.com', role: 'Contributor', posts: 3 },
                ]}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <Button type="link" key="edit">Edit</Button>,
                      <Button type="link" key="view">View</Button>,
                      <Button type="link" danger key="delete" disabled={item.role === 'Administrator'}>
                        Delete
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title={item.username}
                      description={
                        <div>
                          <div>{item.email}</div>
                          <div className="text-sm text-gray-500">
                            {item.role} • {item.posts} posts
                          </div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        );

      case 'general':
        return (
          <div>
            <Title level={2}>General Settings</Title>
            <Card>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Site Title</label>
                  <input
                    type="text"
                    defaultValue="My WordPress Site"
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tagline</label>
                  <input
                    type="text"
                    defaultValue="Just another WordPress site"
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">WordPress Address (URL)</label>
                  <input
                    type="url"
                    defaultValue="https://example.com"
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Site Address (URL)</label>
                  <input
                    type="url"
                    defaultValue="https://example.com"
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Administration Email Address</label>
                  <input
                    type="email"
                    defaultValue="admin@example.com"
                    className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <Button type="primary">Save Changes</Button>
              </div>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Title level={3}>Feature Coming Soon</Title>
            <Paragraph>This feature is currently under development.</Paragraph>
          </div>
        );
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={280}
        className="bg-gray-900"
        theme="dark"
      >
        <div className="p-4 text-center border-b border-gray-700">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <GlobalOutlined className="text-white" />
            </div>
            {!collapsed && (
              <span className="text-white font-semibold text-lg">WordPress</span>
            )}
          </div>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => setSelectedKey(key)}
          className="border-r-0"
        />
      </Sider>

      <Layout>
        <Header className="bg-white shadow-sm px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <div className="flex items-center gap-2">
              <GlobalOutlined className="text-blue-600" />
              <span className="font-semibold">Visit Site</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Badge count={5}>
              <Button type="text" icon={<BellOutlined />} />
            </Badge>
            <Badge count={12}>
              <Button type="text" icon={<CommentOutlined />} />
            </Badge>
            <Button type="primary" icon={<PlusOutlined />}>
              New
            </Button>
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar icon={<UserOutlined />} />
                <span>Admin</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        <Content className="p-6 bg-gray-50">
          {renderDashboardContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;