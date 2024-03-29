import React from "react";
import classnames from "classnames";
import Select from "react-select";

import TextArea from "./textarea";

import "./style/index.less";

interface iProps {
  value?: string;
  defaultValue?: string;
  type?: string;
  style?: object;
  status?: string;
  //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

interface iValue {
  value: string;
}

const Input: React.FC<iProps> = props => {
  const inputCls: string = classnames({
    "kingdee-input": true,
    [`kingdee-input_${props.type}`]: props.type ? true : false,
    [`kingdee-input__${props.status}`]: props.status ? true : false
  });

  const checkCls: string = classnames({
    [`kingdee-input-checkbox`]: true,
    [`kingdee-input-checkbox--${props.status}`]: props.status ? true : false
  });

  let value: any = { label: props.value, value: props.value };

  if (
    props &&
    props.options &&
    props.options.some((index: iValue) => {
      return index.value === props.value;
    })
  ) {
    props.options.forEach((index: iValue) => {
      if(index.value === props.value){
        value = index;
      }
    })
  }

  switch (props.type) {
    case "textarea":
      return (
        <input onChange={props.onChange} {...props}   className={inputCls} />
      );
    case "checkbox":
      return (
        <div className={checkCls}>
          <input
            type="checkbox"
            {...props}
            onChange={e => {
              if (props.onChange) {
                props.onChange(e, "checkbox");
              }
            }}
            checked={!!props.value}
            className="kingdee-input-checkbox_input"
          />
          <span className="kingdee-input-checkbox_span" />
        </div>
      );
    case "select":
      return (
        <Select
          {...props}
          placeholder={props.placeholder ? props.placeholder : ""}
          options={props.options}
          value={typeof value === "undefined" ? {} : value}
          className="react-select"
          onChange={(value: any) => {
            if (props.onChange) {
              props.onChange(value, "select");
            }
          }}
        />

        // </Select>

        // <select className={inputCls} onChange={props.onChange} {...props}>
        //   {props.options.map((index: indexProps) => (
        //     <option key={index.key} value={index.value}>
        //       {index.title}
        //     </option>
        //   ))}
        // </select>
      );
    default:
      return (
        <input
          {...props}
          onChange={props.onChange}
          className={inputCls}
          style={props.style}
          type={props.type ? props.type : "text"}
        />
      );
  }
};

export default Input;
