import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../../assets/styles/dashlite-layout.css';
import '../../assets/styles/nioicon.css';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1200;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarMobile(!sidebarMobile);
    } else {
      setSidebarCompact(!sidebarCompact);
    }
  };

  const closeMobileSidebar = () => {
    if (isMobile) {
      setSidebarMobile(false);
    }
  };

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <Sidebar 
          compact={sidebarCompact}
          mobileShow={sidebarMobile}
          onClose={closeMobileSidebar}
        />
        <div className={`nk-wrap ${sidebarCompact ? 'compact' : ''} ${isMobile ? 'mobile' : ''}`}>
          <Header onToggleSidebar={toggleSidebar} />
          <div className="nk-content">
            <div className="container-fluid">
              <div className="nk-content-inner">
                <div className="nk-content-body">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;