import React from "react";
import "./styles.scss";
import Carousel from "Components/Carousel/Carousel";

const homePresenter = () => {
  return (
    <div className={"home"}>
      <div className={"carousel"}>
        <Carousel width={1440} height={280} />
      </div>
    </div>
  );
};

export default homePresenter;
