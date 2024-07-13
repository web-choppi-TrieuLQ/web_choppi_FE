import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import './AdminHomePage.css'

export function AdminHomePage() {
    return (
        <>
        <div className="admin-home-page">
            <Sidebar />
            <div className="main-content">
                <Dashboard />

            </div>
        </div>
        </>
    )
}