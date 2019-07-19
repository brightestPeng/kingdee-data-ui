import React from "react";
import classnames from "classnames";

import "./style/index.less";

const Icon = ({ type, spin, style, onClick }) => {
  return (
    <i
      onClick={onClick}
      style={style}
      className={classnames({
        icon: true,
        "icon-spin": !!spin || type === "loading",
        [`icon-${type}`]: type ? true : false
      })}
    />
  );
};

export default Icon;
