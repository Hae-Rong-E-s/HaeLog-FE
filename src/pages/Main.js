import React from "react";
import ContentList from "../components/main/ContentList";
import Profile from "../components/main/Profile";
import TagList from "../components/main/TagList";
import MyPage from "../components/main/MyPage";

const Main = () => {
  return (
    <div>
      <Profile />
      {/* <TagList />
      <ContentList /> */}
      <MyPage />
    </div>
  );
};

export default Main;
