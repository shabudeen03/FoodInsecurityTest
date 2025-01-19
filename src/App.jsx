import { useState } from "react";
import './App.css'

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import WelcomePage from "./components/pages/WelcomePage.jsx";
import DashboardPage from "./components/pages/DashboardPage.jsx";
import AuthForm from "./components/pages/AuthForm.jsx";

function Mainbody({ pageId, pageChangeHandler }) {
  if(pageId > 3) return <h1>Soon.</h1>;
  return (<>
      {(pageId == 0) && <WelcomePage pageChangeHandler={pageChangeHandler} />}
      {(pageId == 1) && <AuthForm page="register" pageChangeHandler={pageChangeHandler} />}
      {(pageId == 2) && <AuthForm page="login" pageChangeHandler={pageChangeHandler} />}
      {(pageId == 3) && <DashboardPage />}
  </>);
}

function App() {
  const [pageId, setPageId] = useState(0);
  
  const pageChangeHandler = (pageid) => {
    if(pageid == pageId) return;
    console.log("App.jsx: Tab clicked! " + pageId + " --> " + pageid);
    setPageId(pageid);
  };


  return (
    <>
      <Header pageChangeHandler={pageChangeHandler} />
      <Mainbody pageId={pageId} pageChangeHandler={pageChangeHandler} />
      <Footer />
    </>
  )
}

export default App
