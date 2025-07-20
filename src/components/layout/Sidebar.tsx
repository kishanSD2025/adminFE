import React from 'react';

interface MenuItem {
  id: string;
  icon: string;
  text: string;
  link?: string;
  subItems?: MenuItem[];
}

interface MenuGroup {
  heading?: string;
  items: MenuItem[];
}

interface SidebarProps {
  compact: boolean;
  mobileShow: boolean;
  onClose: () => void;
}

const menuData: MenuGroup[] = [
  {
    items: [
      {
        id: 'dashboard',
        icon: 'dashboard',
        text: 'Dashboard',
        subItems: [
          { id: 'default', icon: 'dashboard', text: 'Default', link: '/dashboard' },
          { id: 'crypto', icon: 'bitcoin-cash', text: 'Crypto', link: '/dashboard/crypto' },
          { id: 'analytics', icon: 'growth', text: 'Analytics', link: '/dashboard/analytics' },
          { id: 'invest', icon: 'coins', text: 'Invest', link: '/dashboard/invest' },
        ]
      }
    ]
  },
  {
    heading: 'Applications',
    items: [
      {
        id: 'pages',
        icon: 'layers',
        text: 'Pre-built Pages',
        subItems: [
          { id: 'projects', icon: 'grid-alt', text: 'Projects', link: '/projects' },
          { id: 'user-manage', icon: 'users', text: 'User Manage', link: '/user-list' },
          { id: 'kyc', icon: 'user-check', text: 'KYC Application', link: '/kyc-list' },
          { id: 'transactions', icon: 'tranx', text: 'Transactions', link: '/transaction-list' },
        ]
      },
      {
        id: 'apps',
        icon: 'tile-thumb',
        text: 'Applications',
        subItems: [
          { id: 'messages', icon: 'chat', text: 'Messages', link: '/app-messages' },
          { id: 'chat', icon: 'chat-circle', text: 'Chat', link: '/app-chat' },
          { id: 'inbox', icon: 'inbox', text: 'Inbox', link: '/app-inbox' },
          { id: 'calendar', icon: 'calendar', text: 'Calendar', link: '/app-calendar' },
        ]
      }
    ]
  },
  {
    heading: 'E-Commerce',
    items: [
      {
        id: 'products',
        icon: 'bag',
        text: 'Products',
        subItems: [
          { id: 'product-list', icon: 'list-thumb', text: 'Product List', link: '/product-list' },
          { id: 'product-card', icon: 'grid-alt', text: 'Product Card', link: '/product-card' },
          { id: 'product-details', icon: 'prod', text: 'Product Details', link: '/product-details' },
        ]
      },
      {
        id: 'invoices',
        icon: 'file-text',
        text: 'Invoices',
        subItems: [
          { id: 'invoice-list', icon: 'list-plain', text: 'Invoice List', link: '/invoice-list' },
          { id: 'invoice-details', icon: 'note', text: 'Invoice Details', link: '/invoice-details' },
        ]
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        id: 'components',
        icon: 'layers',
        text: 'UI Components',
        subItems: [
          { id: 'ui-elements', icon: 'layers', text: 'UI Elements', link: '/components' },
          { id: 'forms', icon: 'edit', text: 'Forms', link: '/form-elements' },
          { id: 'tables', icon: 'table-view', text: 'Tables', link: '/table-basic' },
          { id: 'charts', icon: 'pie', text: 'Charts', link: '/charts-chartjs' },
        ]
      }
    ]
  }
];

const Sidebar: React.FC<SidebarProps> = ({ compact, mobileShow, onClose }) => {
  // const [expandedMenus, setExpandedMenus] = useState<string[]>(['dashboard']);
  // const [activeItem, setActiveItem] = useState('default');

  // Debug log
  console.log('Sidebar render:', { compact, mobileShow, menuDataLength: menuData.length });

  // const toggleMenu = (menuId: string) => {
  //   if (compact) return; // Don't toggle in compact mode
    
  //   setExpandedMenus(prev => 
  //     prev.includes(menuId) 
  //       ? prev.filter(id => id !== menuId)
  //       : [...prev, menuId]
  //   );
  // };

  const sidebarClasses = [
    'nk-sidebar',
    compact ? 'compact' : '',
    // Only hide on mobile when explicitly closed
    window.innerWidth < 1200 ? (mobileShow ? 'mobile-show' : 'mobile-hidden') : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Mobile Overlay */}
      {mobileShow && (
        <div 
          className="nk-sidebar-overlay"
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1009
          }}
        />
      )}
      
      <div className={sidebarClasses}>
        {/* Sidebar Header */}
        <div className="nk-sidebar-element nk-sidebar-head">
          <div className="nk-sidebar-brand">
            <div 
              style={{
                width: '36px',
                height: '36px',
                background: 'linear-gradient(135deg, #5d72f8 0%, #8b45ff 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: '700',
                fontSize: '18px',
                boxShadow: '0 4px 12px rgba(93, 114, 248, 0.3)'
              }}
            >
              D
            </div>
            <div style={{ color: '#fff', fontWeight: '600', fontSize: '20px', letterSpacing: '-0.5px' }}>
              DashLite
            </div>
          </div>
          <div className="nk-menu-trigger d-xl-none" onClick={onClose}>
            <em className="icon ni ni-cross" style={{ color: '#c9d1d9', fontSize: '18px' }}></em>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu">
            <ul className="nk-menu">
              {/* Debug test - simple menu items */}
              <li className="nk-menu-item">
                <a href="#" className="nk-menu-link active">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-dashboard">⊞</em>
                  </span>
                  <span className="nk-menu-text">Dashboard</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-users">👥</em>
                  </span>
                  <span className="nk-menu-text">Users</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-bag">🛍</em>
                  </span>
                  <span className="nk-menu-text">Products</span>
                </a>
              </li>
              <li className="nk-menu-item">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-layers">☰</em>
                  </span>
                  <span className="nk-menu-text">Components</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;