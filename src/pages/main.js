import React from "react";
import ContentList from "../components/main/ContentList";
import Profile from "../components/main/Profile";
import TagList from "../components/main/TagList";

const Main = () => {
  return (
    <div>
      <Profile />
      <TagList />
      <ContentList />
    </div>
  );
};

export default Main;
