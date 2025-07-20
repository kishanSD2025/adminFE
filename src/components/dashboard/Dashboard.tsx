import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge, Button, Card, Row, Col, Statistic, Progress, List, Typography, Space, Divider, Drawer } from 'antd';
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
  MenuUnfoldOutlined,
  SearchOutlined,
  FilterOutlined,
  MoreOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  LineChartOutlined,
  PieChartOutlined,
  BarChartOutlined as BarIcon,
  CalendarOutlined,
  ClockCircleOutlined,
  StarOutlined,
  FireOutlined,
  RiseOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('dashboard');
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Edit My Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Account Settings',
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
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
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

  const StatCard = ({ title, value, icon, trend, trendValue, color }: any) => (
    <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Text className="text-gray-500 text-sm font-medium">{title}</Text>
          <div className="flex items-center gap-2 mt-1">
            <Text className="text-2xl font-bold text-gray-900">{value}</Text>
            {trend && (
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {trend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                {trendValue}
              </div>
            )}
          </div>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
    </Card>
  );

  const renderDashboardContent = () => {
    switch (selectedKey) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <Title level={2} className="text-white mb-2 !text-2xl md:!text-3xl font-bold">
                      Welcome back, Admin! 👋
                    </Title>
                    <Text className="text-blue-100 text-base md:text-lg">
                      Here's what's happening with your site today
                    </Text>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      type="primary" 
                      size="large"
                      icon={<EditOutlined />}
                      className="bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur-sm"
                    >
                      Write Post
                    </Button>
                    <Button 
                      size="large"
                      icon={<EyeOutlined />}
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      View Site
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>

            {/* Stats Grid */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Total Posts"
                  value="1,234"
                  icon={<FileTextOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="12%"
                  color="bg-gradient-to-br from-blue-500 to-blue-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Page Views"
                  value="45.2K"
                  icon={<EyeOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="8%"
                  color="bg-gradient-to-br from-green-500 to-green-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Comments"
                  value="892"
                  icon={<CommentOutlined className="text-xl text-white" />}
                  trend="down"
                  trendValue="3%"
                  color="bg-gradient-to-br from-purple-500 to-purple-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Active Users"
                  value="156"
                  icon={<UserOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="15%"
                  color="bg-gradient-to-br from-orange-500 to-orange-600"
                />
              </Col>
            </Row>

            {/* Main Content Grid */}
            <Row gutter={[24, 24]}>
              {/* Analytics Chart */}
              <Col xs={24} lg={16}>
                <Card 
                  title={
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <LineChartOutlined className="text-blue-600" />
                        <span className="font-semibold">Site Analytics</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="small" type="text" icon={<FilterOutlined />}>Filter</Button>
                        <Button size="small" type="text" icon={<MoreOutlined />} />
                      </div>
                    </div>
                  }
                  className="shadow-sm border-0 rounded-xl"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarIcon className="text-4xl text-blue-400 mb-4" />
                      <Text className="text-gray-500">Analytics chart would go here</Text>
                      <div className="mt-4 flex justify-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">24.5K</div>
                          <div className="text-sm text-gray-500">This Month</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">+18%</div>
                          <div className="text-sm text-gray-500">Growth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* Quick Actions */}
              <Col xs={24} lg={8}>
                <Card 
                  title={
                    <div className="flex items-center gap-2">
                      <RocketOutlined className="text-purple-600" />
                      <span className="font-semibold">Quick Actions</span>
                    </div>
                  }
                  className="shadow-sm border-0 rounded-xl h-full"
                >
                  <div className="space-y-3">
                    <Button 
                      block 
                      size="large" 
                      icon={<EditOutlined />}
                      className="text-left h-12 flex items-center justify-start hover:shadow-md transition-all"
                    >
                      Create New Post
                    </Button>
                    <Button 
                      block 
                      size="large" 
                      icon={<PictureOutlined />}
                      className="text-left h-12 flex items-center justify-start hover:shadow-md transition-all"
                    >
                      Upload Media
                    </Button>
                    <Button 
                      block 
                      size="large" 
                      icon={<UserOutlined />}
                      className="text-left h-12 flex items-center justify-start hover:shadow-md transition-all"
                    >
                      Add New User
                    </Button>
                    <Button 
                      block 
                      size="large" 
                      icon={<SettingOutlined />}
                      className="text-left h-12 flex items-center justify-start hover:shadow-md transition-all"
                    >
                      Site Settings
                    </Button>
                  </div>
                </Card>
              </Col>

              {/* Recent Activity */}
              <Col xs={24} lg={12}>
                <Card 
                  title={
                    <div className="flex items-center gap-2">
                      <ClockCircleOutlined className="text-green-600" />
                      <span className="font-semibold">Recent Activity</span>
                    </div>
                  }
                  extra={<Button type="link" size="small">View All</Button>}
                  className="shadow-sm border-0 rounded-xl"
                >
                  <List
                    size="small"
                    dataSource={[
                      {
                        title: 'New post "Getting Started with React" published',
                        time: '2 minutes ago',
                        type: 'post',
                        color: 'bg-blue-100 text-blue-600'
                      },
                      {
                        title: 'Comment approved on "Hello World"',
                        time: '15 minutes ago',
                        type: 'comment',
                        color: 'bg-green-100 text-green-600'
                      },
                      {
                        title: 'User "john_doe" registered',
                        time: '1 hour ago',
                        type: 'user',
                        color: 'bg-purple-100 text-purple-600'
                      },
                      {
                        title: 'Plugin "SEO Tools" updated',
                        time: '3 hours ago',
                        type: 'plugin',
                        color: 'bg-orange-100 text-orange-600'
                      }
                    ]}
                    renderItem={(item) => (
                      <List.Item className="border-0 px-0">
                        <div className="flex items-start gap-3 w-full">
                          <div className={`w-2 h-2 rounded-full mt-2 ${item.color.split(' ')[0]}`}></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                            <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                          </div>
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>

              {/* Site Health */}
              <Col xs={24} lg={12}>
                <Card 
                  title={
                    <div className="flex items-center gap-2">
                      <SecurityScanOutlined className="text-red-600" />
                      <span className="font-semibold">Site Health</span>
                    </div>
                  }
                  extra={<Button type="link" size="small">View Details</Button>}
                  className="shadow-sm border-0 rounded-xl"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <Text className="font-medium">Overall Score</Text>
                        <Text className="text-green-600 font-semibold">Excellent</Text>
                      </div>
                      <Progress 
                        percent={92} 
                        strokeColor={{
                          '0%': '#10b981',
                          '100%': '#059669',
                        }}
                        className="mb-4"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <ThunderboltOutlined className="text-2xl text-green-600 mb-2" />
                        <div className="text-xs font-medium text-green-700">Performance</div>
                        <div className="text-sm font-bold text-green-800">95%</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <SecurityScanOutlined className="text-2xl text-blue-600 mb-2" />
                        <div className="text-xs font-medium text-blue-700">Security</div>
                        <div className="text-sm font-bold text-blue-800">88%</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <RocketOutlined className="text-2xl text-purple-600 mb-2" />
                        <div className="text-xs font-medium text-purple-700">SEO</div>
                        <div className="text-sm font-bold text-purple-800">94%</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Title level={2} className="mb-2">Analytics Dashboard</Title>
                <Text className="text-gray-600">Track your site's performance and user engagement</Text>
              </div>
              <div className="flex gap-2">
                <Button icon={<CalendarOutlined />}>Last 30 Days</Button>
                <Button type="primary" icon={<FilterOutlined />}>Filter</Button>
              </div>
            </div>

            {/* Analytics Stats */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Page Views"
                  value="125.4K"
                  icon={<EyeOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="23%"
                  color="bg-gradient-to-br from-blue-500 to-blue-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Unique Visitors"
                  value="45.2K"
                  icon={<UserOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="12%"
                  color="bg-gradient-to-br from-green-500 to-green-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Bounce Rate"
                  value="32.5%"
                  icon={<RiseOutlined className="text-xl text-white" />}
                  trend="down"
                  trendValue="5%"
                  color="bg-gradient-to-br from-orange-500 to-orange-600"
                />
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StatCard
                  title="Avg. Session"
                  value="4m 32s"
                  icon={<ClockCircleOutlined className="text-xl text-white" />}
                  trend="up"
                  trendValue="8%"
                  color="bg-gradient-to-br from-purple-500 to-purple-600"
                />
              </Col>
            </Row>

            {/* Charts Row */}
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="Traffic Overview"
                  className="shadow-sm border-0 rounded-xl"
                  extra={
                    <div className="flex gap-2">
                      <Button size="small" type="text">Day</Button>
                      <Button size="small" type="primary">Week</Button>
                      <Button size="small" type="text">Month</Button>
                    </div>
                  }
                >
                  <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <LineChartOutlined className="text-6xl text-gray-400 mb-4" />
                      <Text className="text-gray-500">Interactive chart would be displayed here</Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card 
                  title="Top Pages"
                  className="shadow-sm border-0 rounded-xl"
                  extra={<Button type="link" size="small">View All</Button>}
                >
                  <List
                    size="small"
                    dataSource={[
                      { page: '/blog/getting-started', views: '12.4K', percentage: 85 },
                      { page: '/about', views: '8.2K', percentage: 65 },
                      { page: '/contact', views: '5.1K', percentage: 45 },
                      { page: '/services', views: '3.8K', percentage: 35 },
                      { page: '/portfolio', views: '2.9K', percentage: 25 },
                    ]}
                    renderItem={(item) => (
                      <List.Item className="border-0 px-0">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-1">
                            <Text className="text-sm font-medium truncate">{item.page}</Text>
                            <Text className="text-sm font-semibold text-blue-600">{item.views}</Text>
                          </div>
                          <Progress 
                            percent={item.percentage} 
                            size="small" 
                            strokeColor="#3b82f6"
                            showInfo={false}
                          />
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        );

      case 'all-posts':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <Title level={2} className="mb-2">Posts</Title>
                <Text className="text-gray-600">Manage your blog posts and articles</Text>
              </div>
              <div className="flex gap-2">
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<FilterOutlined />}>Filter</Button>
                <Button type="primary" icon={<PlusOutlined />}>Add New Post</Button>
              </div>
            </div>

            <Card className="shadow-sm border-0 rounded-xl">
              <List
                dataSource={[
                  { 
                    title: 'Getting Started with Modern Web Development', 
                    status: 'Published', 
                    date: '2024-01-15', 
                    author: 'Admin',
                    views: '1.2K',
                    comments: 23
                  },
                  { 
                    title: 'The Future of React and Next.js', 
                    status: 'Draft', 
                    date: '2024-01-14', 
                    author: 'Admin',
                    views: '0',
                    comments: 0
                  },
                  { 
                    title: 'Building Responsive Layouts with Tailwind CSS', 
                    status: 'Published', 
                    date: '2024-01-13', 
                    author: 'Editor',
                    views: '856',
                    comments: 12
                  },
                ]}
                renderItem={(item) => (
                  <List.Item
                    className="border-0 border-b border-gray-100 last:border-b-0 py-4"
                    actions={[
                      <Button type="link" key="edit" icon={<EditOutlined />}>Edit</Button>,
                      <Button type="link" key="view" icon={<EyeOutlined />}>View</Button>,
                      <Dropdown
                        key="more"
                        menu={{
                          items: [
                            { key: 'duplicate', label: 'Duplicate' },
                            { key: 'trash', label: 'Move to Trash', danger: true },
                          ]
                        }}
                      >
                        <Button type="text" icon={<MoreOutlined />} />
                      </Dropdown>
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <div className="flex items-center gap-3">
                          <Text className="font-semibold text-lg hover:text-blue-600 cursor-pointer">
                            {item.title}
                          </Text>
                          <Badge 
                            status={item.status === 'Published' ? 'success' : 'warning'} 
                            text={item.status}
                          />
                        </div>
                      }
                      description={
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                          <span>By {item.author}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.views} views</span>
                          <span>•</span>
                          <span>{item.comments} comments</span>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl text-gray-300 mb-4">🚧</div>
              <Title level={3} className="text-gray-500">Feature Coming Soon</Title>
              <Paragraph className="text-gray-400">This feature is currently under development.</Paragraph>
            </div>
          </div>
        );
    }
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <GlobalOutlined className="text-white text-lg" />
          </div>
          {!collapsed && (
            <div>
              <div className="text-white font-bold text-lg">WordPress</div>
              <div className="text-gray-400 text-xs">Admin Dashboard</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => {
            setSelectedKey(key);
            if (isMobile) {
              setMobileDrawerVisible(false);
            }
          }}
          className="border-r-0 bg-transparent"
        />
      </div>
    </div>
  );

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={280}
          collapsedWidth={80}
          className="bg-gray-900 shadow-xl"
          theme="dark"
        >
          {sidebarContent}
        </Sider>
      )}

      {/* Mobile Drawer */}
      <Drawer
        title={null}
        placement="left"
        onClose={() => setMobileDrawerVisible(false)}
        open={mobileDrawerVisible}
        bodyStyle={{ padding: 0 }}
        width={280}
        className="lg:hidden"
      >
        <div className="bg-gray-900 h-full text-white">
          {sidebarContent}
        </div>
      </Drawer>

      <Layout>
        {/* Header */}
        <Header className="bg-white shadow-sm px-4 md:px-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              type="text"
              icon={isMobile ? <MenuFoldOutlined /> : (collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />)}
              onClick={() => {
                if (isMobile) {
                  setMobileDrawerVisible(true);
                } else {
                  setCollapsed(!collapsed);
                }
              }}
              className="hover:bg-gray-100"
            />
            <div className="hidden md:flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              <GlobalOutlined />
              <span className="font-medium">Visit Site</span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              type="text" 
              icon={<SearchOutlined />} 
              className="hover:bg-gray-100 hidden md:inline-flex"
            />
            <Badge count={5} size="small">
              <Button type="text" icon={<BellOutlined />} className="hover:bg-gray-100" />
            </Badge>
            <Badge count={12} size="small">
              <Button type="text" icon={<CommentOutlined />} className="hover:bg-gray-100" />
            </Badge>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 border-blue-600"
            >
              New
            </Button>
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
              trigger={['click']}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition-colors">
                <Avatar 
                  icon={<UserOutlined />} 
                  className="bg-gradient-to-br from-blue-500 to-purple-600"
                />
                <span className="hidden md:inline font-medium">Admin</span>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Main Content */}
        <Content className="p-4 md:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderDashboardContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;