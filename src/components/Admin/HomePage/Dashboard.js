import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="topbar d-flex justify-content-between align-items-center">
                <h4>Analytics Dashboard</h4>
                <div className="user-info d-flex align-items-center">
                    <img src="https://via.placeholder.com/40" alt="user" className="rounded-circle me-2" />
                    <div>
                        <div>Alina Mcloud</div>
                        <small>VP People Manager</small>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <h5 className="card-title">Total Orders</h5>
                                <p className="card-text">1896</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-white bg-info">
                            <div className="card-body">
                                <h5 className="card-title">Clients</h5>
                                <p className="card-text">$ 568</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card text-white bg-success">
                            <div className="card-body">
                                <h5 className="card-title">Followers</h5>
                                <p className="card-text">46%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sales Report</h5>
                                <div className="chart">
                                    {/* Add your Chart.js or any chart library component here */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bandwidth Reports</h5>
                                <div className="chart">
                                    {/* Add your Chart.js or any chart library component here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top Authors</h5>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Ella-Rose Henry
                                        <span className="badge bg-primary rounded-pill">$129</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Ruben Tillman
                                        <span className="badge bg-primary rounded-pill">$54</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Vinnie Wagstaff
                                        <span className="badge bg-primary rounded-pill">$429</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Active Users</h5>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        John Doe
                                        <span className="badge bg-warning text-dark">Pending</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Ruben Tillman
                                        <span className="badge bg-success">Completed</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Elliot Huber
                                        <span className="badge bg-danger">In Progress</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Vinnie Wagstaff
                                        <span className="badge bg-secondary">On Hold</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
