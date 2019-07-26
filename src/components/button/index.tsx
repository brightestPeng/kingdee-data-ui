import React, { ReactNode } from "react";
import classnames from "classnames";
import "./style/index.less";

interface Props{
  type?:string;
  width?:number;
  children?:ReactNode;
  size?:string;
  style?:object;
  onClick?:(event:React.MouseEvent<HTMLButtonElement>)=> void;
}

const Button: React.FC<Props> = props => {

  let btnCls:string = classnames({
    "kingdee-btn":true,
    [`kingdee-btn--${props.type}`]:props.type?true:false,
    [`kingdee-btn--${props.size}`]:props.size?true:false
  })

  return (
    <button className={btnCls} onClick={props.onClick}  style={props.style}  >
      <span>{props.children?props.children:"button"}</span>
    </button>
  );
};

export default Button;
