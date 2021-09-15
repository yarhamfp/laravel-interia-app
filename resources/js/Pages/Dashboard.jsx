import React from "react";
import App from "../Layouts/App";

export default function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-header">Dashboard</div>
                    <div className="card-body">Your dashboard</div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <App children={page} title="Dashboard" />;
