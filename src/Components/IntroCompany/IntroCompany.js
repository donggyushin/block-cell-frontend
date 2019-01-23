import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Fade from "react-reveal/Fade";

const cx = classNames.bind(styles);

const IntroCompany = () => {
  return (
    <Fade bottom>
      <div className={cx("IntroCompany")}>
        <div className={cx("row")}>
          <h1>(주) 블록셀</h1>
        </div>
        <div className={cx("row")}>
          <div className={cx("column")}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              porta nibh venenatis cras. Fermentum et sollicitudin ac orci
              phasellus egestas tellus rutrum tellus. Odio ut sem nulla pharetra
              diam sit amet. Maecenas volutpat blandit aliquam etiam. Accumsan
              in nisl nisi scelerisque. Accumsan sit amet nulla facilisi.
              Porttitor eget dolor morbi non arcu. Quam nulla porttitor massa id
              neque aliquam vestibulum morbi. Odio euismod lacinia at quis risus
              sed. Auctor neque vitae tempus quam pellentesque nec. Vitae sapien
              pellentesque habitant morbi. Vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor. Risus feugiat in ante
              metus dictum at tempor. Ac orci phasellus egestas tellus rutrum
              tellus pellentesque. Egestas tellus rutrum tellus pellentesque eu
              tincidunt tortor. Sed cras ornare arcu dui vivamus arcu felis.
              egestas tellus rutrum tellus. Odio ut sem nulla pharetra diam sit
              amet. Maecenas volutpat blandit aliquam etiam. Accumsan in nisl
              nisi scelerisque. Accumsan sit amet nulla facilisi. Porttitor eget
              dolor morbi non arcu. Quam nulla porttitor massa id neque aliquam
              vestibulum morbi. Odio euismod lacinia at quis risus sed. Auctor
              neque vitae tempus quam pellentesque nec. Vitae sapien
              pellentesque habitant morbi. Vulputate enim nulla aliquet
              porttitor lacus luctus accumsan tortor. Risus feugiat in ante
            </p>
          </div>
          <div className={cx("column")}>
            <p>
              Sapien nec sagittis aliquam malesuada bibendum. Quis auctor elit
              sed vulputate mi sit amet mauris commodo. Nullam eget felis eget
              nunc lobortis mattis. Semper risus in hendrerit gravida rutrum
              quisque. Consectetur purus ut faucibus pulvinar elementum.
              Faucibus a pellentesque sit amet porttitor eget dolor morbi.
              Adipiscing bibendum est ultricies integer quis auctor elit.
              Aliquam faucibus purus in massa tempor nec feugiat. Imperdiet
              nulla malesuada pellentesque elit eget. Habitant morbi tristique
              senectus et netus. Sed velit dignissim sodales ut eu sem integer
              vitae. Enim eu turpis egestas pretium aenean pharetra. Sagittis
              vitae et leo duis ut. Etiam non quam lacus suspendisse. Risus quis
              varius quam quisque id diam vel. Vitae semper quis lectus nulla
              at. Pulvinar neque laoreet suspendisse interdum consectetur libero
              id faucibus nisl. Urna porttitor rhoncus dolor purus. or eget
              dolor morbi. Adipiscing bibendum est ultricies integer quis auctor
              elit. Aliquam faucibus purus in massa tempor nec feugiat.
              Imperdiet nulla malesuada pellentesque elit eget. Habitant morbi
              tristique senectus et netus. Sed velit dignissim sodales ut eu sem
              integer vitae. Enim eu turpis egestas pretium ae
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IntroCompany;
