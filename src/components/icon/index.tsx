import React from "react";
import classnames from "classnames";

import "./style/index.less";

interface Props {
  type: string;
  spin?: boolean;
  style?: object;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Icon: React.FC<Props> = props => {
  let iconCls: string = classnames({
    "kingdee-icon": true,
    "kingdee-icon-spin": !!props.spin || props.type === "loading",
    [`kingdee-icon-${props.type}`]: props.type ? true : false
  });

  return <i onClick={props.onClick} style={props.style} className={iconCls} />;
};

export default Icon;
