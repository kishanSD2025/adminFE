import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="nk-footer">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
            © 2024 DashLite. Template by <a href="#" style={{ color: '#5d72f8', textDecoration: 'none' }}>Softnio</a>
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li>
                <a href="#" style={{ color: '#8fa2b7', textDecoration: 'none' }}>
                  Terms
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#8fa2b7', textDecoration: 'none' }}>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#8fa2b7', textDecoration: 'none' }}>
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;