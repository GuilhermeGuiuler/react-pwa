import React from "react";
import { isIOS } from "react-device-detect";

import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Notification from "../../components/Notification";

function Home() {
  return (
    <>
      {!localStorage.getItem("@BLOGPWA:NOTIFICATION") &&
        (!isIOS && <Notification />)}
      <Header />
      <Posts />
    </>
  );
}

export default Home;
