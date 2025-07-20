import React, { useState } from 'react';
import Layout from '../layout/Layout';
import '../../assets/styles/dashlite-dashboard.css';

interface DashboardProps {
  onLogout?: () => void;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [sm, updateSm] = useState(false);

  return (
    <Layout title="Dashboard">
      {/* Block Head */}
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <div className="nk-block-head-content">
            <h3 className="nk-block-title page">Sales Overview</h3>
            <div className="nk-block-des text-soft">
              <p>Welcome to DashLite Dashboard Template</p>
            </div>
          </div>
          <div className="nk-block-head-content">
            <div className="toggle-wrap nk-block-tools-toggle">
              <button
                className={`btn btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                onClick={() => updateSm(!sm)}
              >
                <em className="icon ni ni-more-v"></em>
              </button>
              <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                <ul className="nk-block-tools g-3">
                  <li>
                    <div className="dropdown">
                      <button className="dropdown-toggle btn btn-white btn-dim btn-outline-light" type="button">
                        <em className="icon ni ni-calender-date d-none d-sm-inline"></em>
                        <span>
                          <span className="d-none d-md-inline">Last</span> 30 Days
                        </span>
                        <em className="dd-indc icon ni ni-chevron-right"></em>
                      </button>
                    </div>
                  </li>
                  <li className="nk-block-tools-opt">
                    <button className="btn btn-primary">
                      <em className="icon ni ni-reports"></em>
                      <span>Reports</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="nk-block">
                <div className="row g-gs">
                  {/* Left Column */}
                  <div className="col-xxl-6">
                    <div className="row g-gs">
                      {/* Sales Revenue */}
                      <div className="col-lg-6 col-xxl-12">
                        <div className="card card-bordered preview-card">
                          <div className="card-inner">
                            <div className="sales-card">
                              <h6 className="sales-title">Sale Revenue</h6>
                              <div className="sales-amount">2,346</div>
                              <div className="sales-info">
                                <span className="sales-change up">
                                  <em className="icon ni ni-arrow-long-up"></em>
                                  4.63%
                                </span>
                                <span style={{ color: '#8fa2b7', marginLeft: '0.5rem' }}>vs last week</span>
                              </div>
                              <div className="chart-container">
                                {/* Chart placeholder */}
                                <div style={{ 
                                  height: '100%', 
                                  background: 'linear-gradient(45deg, #5d72f8 0%, #a5b4fc 100%)', 
                                  borderRadius: '4px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#fff',
                                  fontSize: '0.875rem'
                                }}>
                                  Revenue Chart
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subscription Cards */}
                      <div className="col-lg-6 col-xxl-12">
                        <div className="row g-gs">
                          <div className="col-sm-6 col-lg-12 col-xxl-6">
                            <div className="card card-bordered preview-card-alt">
                              <div className="card-inner">
                                <div className="sales-card">
                                  <h6 className="sales-title">Active Subscription</h6>
                                  <div className="sales-amount">9,166</div>
                                  <div className="sales-info">
                                    <span className="sales-change up">
                                      <em className="icon ni ni-arrow-long-up"></em>
                                      2.45%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-12 col-xxl-6">
                            <div className="card card-bordered preview-card-alt">
                              <div className="card-inner">
                                <div className="sales-card">
                                  <h6 className="sales-title">Avg Subscription</h6>
                                  <div className="sales-amount">$2.83</div>
                                  <div className="sales-info">
                                    <span className="sales-change down">
                                      <em className="icon ni ni-arrow-long-down"></em>
                                      0.5%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sales Overview Chart */}
                  <div className="col-xxl-6">
                    <div className="card card-bordered preview-card-alt h-100">
                      <div className="card-inner">
                        <div className="sales-card">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h6 className="sales-title">Sales Overview</h6>
                            <div className="dropdown">
                              <button className="btn btn-sm btn-outline-light">
                                <em className="icon ni ni-download-cloud"></em>
                                Download Report
                              </button>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
                            <div>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#364a63' }}>$15,652</div>
                              <div style={{ fontSize: '0.875rem', color: '#8fa2b7' }}>Revenue</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#364a63' }}>2,542</div>
                              <div style={{ fontSize: '0.875rem', color: '#8fa2b7' }}>Subscribers</div>
                            </div>
                          </div>
                          <div className="chart-container" style={{ height: '250px' }}>
                            {/* Chart placeholder */}
                            <div style={{ 
                              height: '100%', 
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                              borderRadius: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontSize: '0.875rem'
                            }}>
                              Sales Overview Chart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Table */}
                  <div className="col-xxl-8">
                    <div className="card card-bordered card-full">
                      <div className="card-inner">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                          <h6 className="sales-title">Transaction</h6>
                          <button className="btn btn-sm btn-outline-light">View All</button>
                        </div>
                        <table className="nk-tb-list">
                          <thead>
                            <tr>
                              <th className="nk-tb-col nk-tb-col-check">
                                <input type="checkbox" />
                              </th>
                              <th className="nk-tb-col">Order No.</th>
                              <th className="nk-tb-col nk-tb-col-tb">Customer</th>
                              <th className="nk-tb-col">Date</th>
                              <th className="nk-tb-col">Amount</th>
                              <th className="nk-tb-col">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="nk-tb-item">
                              <td className="nk-tb-col nk-tb-col-check">
                                <input type="checkbox" />
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-lead">#95954</span>
                              </td>
                              <td className="nk-tb-col nk-tb-col-tb">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <div className="user-avatar user-avatar-sm">AB</div>
                                  <span>Abu Bin Ishtiyak</span>
                                </div>
                              </td>
                              <td className="nk-tb-col">
                                <span>10 Feb 2020</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-amount">$2,310</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-status tb-status-success">Complete</span>
                              </td>
                            </tr>
                            <tr className="nk-tb-item">
                              <td className="nk-tb-col nk-tb-col-check">
                                <input type="checkbox" />
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-lead">#95955</span>
                              </td>
                              <td className="nk-tb-col nk-tb-col-tb">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <div className="user-avatar user-avatar-sm">JD</div>
                                  <span>John Doe</span>
                                </div>
                              </td>
                              <td className="nk-tb-col">
                                <span>12 Feb 2020</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-amount">$120</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-status tb-status-pending">Pending</span>
                              </td>
                            </tr>
                            <tr className="nk-tb-item">
                              <td className="nk-tb-col nk-tb-col-check">
                                <input type="checkbox" />
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-lead">#95956</span>
                              </td>
                              <td className="nk-tb-col nk-tb-col-tb">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                  <div className="user-avatar user-avatar-sm">SM</div>
                                  <span>Sarah Miller</span>
                                </div>
                              </td>
                              <td className="nk-tb-col">
                                <span>15 Feb 2020</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-amount">$560</span>
                              </td>
                              <td className="nk-tb-col">
                                <span className="tb-status tb-status-cancelled">Cancelled</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card card-bordered card-full">
                      <div className="card-inner">
                        <h6 className="sales-title">Recent Activity</h6>
                        <div className="activity-list">
                          <div className="activity-item">
                            <div className="activity-icon icon-circle bg-primary">
                              <em className="icon ni ni-arrow-up-right"></em>
                            </div>
                            <div className="activity-content">
                              <div className="activity-text">
                                <strong>John Doe</strong> placed new order
                              </div>
                              <div className="activity-time">2 hours ago</div>
                            </div>
                          </div>
                          <div className="activity-item">
                            <div className="activity-icon icon-circle bg-success">
                              <em className="icon ni ni-check"></em>
                            </div>
                            <div className="activity-content">
                              <div className="activity-text">
                                Payment received from <strong>Sarah Miller</strong>
                              </div>
                              <div className="activity-time">4 hours ago</div>
                            </div>
                          </div>
                          <div className="activity-item">
                            <div className="activity-icon icon-circle bg-primary">
                              <em className="icon ni ni-users"></em>
                            </div>
                            <div className="activity-content">
                              <div className="activity-text">
                                New user <strong>Mike Johnson</strong> registered
                              </div>
                              <div className="activity-time">6 hours ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* New Users */}
                  <div className="col-xxl-4 col-md-6">
                    <div className="card card-bordered card-full">
                      <div className="card-inner">
                        <h6 className="sales-title">New Users</h6>
                        <div className="activity-list">
                          <div className="activity-item">
                            <div className="user-avatar">AB</div>
                            <div className="activity-content">
                              <div className="activity-text">Abu Bin Ishtiyak</div>
                              <div className="activity-time">Joined 2 days ago</div>
                            </div>
                          </div>
                          <div className="activity-item">
                            <div className="user-avatar">JD</div>
                            <div className="activity-content">
                              <div className="activity-text">John Doe</div>
                              <div className="activity-time">Joined 3 days ago</div>
                            </div>
                          </div>
                          <div className="activity-item">
                            <div className="user-avatar">SM</div>
                            <div className="activity-content">
                              <div className="activity-text">Sarah Miller</div>
                              <div className="activity-time">Joined 1 week ago</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support Requests */}
                  <div className="col-lg-6 col-xxl-4">
                    <div className="card card-bordered h-100">
                      <div className="card-inner">
                        <h6 className="sales-title">Support Requests</h6>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#364a63', marginBottom: '0.5rem' }}>
                            23
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#8fa2b7' }}>
                            Pending requests
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notifications */}
                  <div className="col-lg-6 col-xxl-4">
                    <div className="card card-bordered h-100">
                      <div className="card-inner">
                        <h6 className="sales-title">Notifications</h6>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#364a63', marginBottom: '0.5rem' }}>
                            5
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#8fa2b7' }}>
                            Unread notifications
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </Layout>
  )
};

export default Dashboard;