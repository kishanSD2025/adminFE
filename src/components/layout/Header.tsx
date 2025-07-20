import React, { useState } from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout clicked');
    setUserDropdownOpen(false);
  };

  return (
    <div className="nk-header">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          {/* Mobile Menu Trigger */}
          <div className="nk-menu-trigger d-xl-none" onClick={onToggleSidebar}>
            <button 
              type="button"
              style={{
                background: 'transparent',
                border: '1px solid #e5e9f2',
                borderRadius: '4px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <em className="icon ni ni-menu" style={{ fontSize: '16px', color: '#364a63' }}></em>
            </button>
          </div>

          {/* Desktop Menu Trigger */}
          <div className="nk-menu-trigger d-none d-xl-block" onClick={onToggleSidebar}>
            <button 
              type="button"
              style={{
                background: 'transparent',
                border: '1px solid #e5e9f2',
                borderRadius: '4px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <em className="icon ni ni-menu" style={{ fontSize: '16px', color: '#364a63' }}></em>
            </button>
          </div>

          {/* Header Brand (Mobile) */}
          <div className="nk-header-brand d-xl-none">
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#364a63',
                fontWeight: '600',
                fontSize: '18px'
              }}
            >
              <div 
                style={{
                  width: '28px',
                  height: '28px',
                  background: '#5d72f8',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                D
              </div>
              DashLite
            </div>
          </div>

          {/* Header News (Desktop) */}
          <div className="nk-header-news d-none d-xl-block">
            <div 
              style={{
                background: '#e8ecfb',
                color: '#5d72f8',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              🎉 Welcome to DashLite Admin Dashboard
            </div>
          </div>

          {/* Header Tools */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              {/* Notifications */}
              <li className="notification-dropdown me-n1" style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={toggleNotificationDropdown}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <em className="icon ni ni-bell" style={{ fontSize: '18px', color: '#364a63' }}></em>
                  <span 
                    style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      width: '8px',
                      height: '8px',
                      background: '#e85347',
                      borderRadius: '50%',
                      fontSize: '10px',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                  </span>
                </button>
                {notificationDropdownOpen && (
                  <div className="dropdown-menu show">
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e5e9f2' }}>
                      <h6 style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>
                        Notifications
                      </h6>
                    </div>
                    <a href="#" className="dropdown-item">
                      <em className="icon ni ni-check-circle" style={{ color: '#1ee0ac' }}></em>
                      Your order is placed
                      <div style={{ fontSize: '0.75rem', color: '#8fa2b7', marginTop: '0.25rem' }}>
                        2 min ago
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <em className="icon ni ni-alarm-alt" style={{ color: '#f4bd0e' }}></em>
                      Your profile is 80% completed
                      <div style={{ fontSize: '0.75rem', color: '#8fa2b7', marginTop: '0.25rem' }}>
                        5 min ago
                      </div>
                    </a>
                    <div style={{ padding: '0.5rem 1rem', borderTop: '1px solid #e5e9f2' }}>
                      <a href="#" style={{ fontSize: '0.875rem', color: '#5d72f8', textDecoration: 'none' }}>
                        View All
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* User Dropdown */}
              <li className="user-dropdown" style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="user-toggle"
                  onClick={toggleUserDropdown}
                >
                  <div className="user-avatar">
                    AB
                  </div>
                  <div className="user-name d-none d-sm-block">
                    Abu Bin Ishtiyak
                  </div>
                  <em className="icon ni ni-chevron-down" style={{ fontSize: '12px', marginLeft: '0.25rem' }}></em>
                </button>
                {userDropdownOpen && (
                  <div className="dropdown-menu show">
                    <div style={{ padding: '1rem', borderBottom: '1px solid #e5e9f2' }}>
                      <h6 style={{ margin: 0, fontSize: '0.875rem', fontWeight: '600' }}>
                        Abu Bin Ishtiyak
                      </h6>
                      <div style={{ fontSize: '0.75rem', color: '#8fa2b7' }}>
                        info@softnio.com
                      </div>
                    </div>
                    <a href="#" className="dropdown-item">
                      <em className="icon ni ni-user-alt"></em>
                      View Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      <em className="icon ni ni-setting-alt"></em>
                      Account Setting
                    </a>
                    <a href="#" className="dropdown-item">
                      <em className="icon ni ni-activity-alt"></em>
                      Login Activity
                    </a>
                    <div style={{ borderTop: '1px solid #e5e9f2', margin: '0.5rem 0' }}></div>
                    <a href="#" className="dropdown-item" onClick={handleLogout}>
                      <em className="icon ni ni-signout"></em>
                      Sign out
                    </a>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;