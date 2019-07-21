import React, { ReactNode } from "react";
import classnames from "classnames";
import "./index.less";

interface Props{
  type?:string;
  width?:number;
  children?:ReactNode;
  size?:string;
  onClick?:(event:React.MouseEvent<HTMLButtonElement>)=> void;
}

const Button: React.FC<Props> = props => {

  let btnCls:string = classnames({
    "pure-btn":true,
    [`pure-btn--${props.type}`]:props.type?true:false,
    [`pure-btn--${props.size}`]:props.size?true:false
  })

  return (
    <button className={btnCls} onClick={props.onClick}  style={{ width:props.width  }}  >
      <span>{props.children?props.children:"button"}</span>
    </button>
  );
};

export default Button;
