import React from "react";
import Header from "view/Header/Header";

const Dashboard = () => {
  return (
    <>
      <Header
        heroStyles={
          "page-header d-flex align-items-center justify-content-center"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fs-1 text-center">Dashboard</h1>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Dashboard;