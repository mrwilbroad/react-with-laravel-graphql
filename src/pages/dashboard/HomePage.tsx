import React from "react";
import HomeTabs from "../../component/Tabs/HomeTabs";
import AuthLayout from "../../Layout/AuthLayout";

const HomePage = () => {
  return (
    <AuthLayout>
      <div className="container mt-4">
        <h1>GraphQL-Laravel & ReactJS App</h1>
        <p>Welcome to the Home Page!</p>
        <HomeTabs />
      </div>
    </AuthLayout>
  );
};

export default HomePage;
