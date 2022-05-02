import AppRouter from "./components/AppRouter";
import React, { FC } from "react";
import { Header } from "components/layouts/Header";
import "styles/main.scss";
import "./App.css";
import { Sidebar } from "components/layouts/sidebar/Sidebar";
import Footer from "components/layouts/Footer";

const App: FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main">
        <div className="main_content">
          <div className="layout">
            <AppRouter />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
