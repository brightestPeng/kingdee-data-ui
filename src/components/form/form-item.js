import React, { cloneElement, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const hasRequire = children => {
  return (
    children &&
    children.props &&
    children.props.config &&
    children.props.config.rules &&
    children.props.config.rules.some(item => {
      return item.require;
    })
  );
};

let msg = "error";

const hasMessage = (value, rules) => {
  return rules.every(index => {
    if (index.require && !value.trim()) {
      msg = index.message ? index.message : "error";
      return false;
    }
    if (index.regExp && !new regExp(index.regExp).test(value)) {
      msg = index.message ? index.message : "error";
      return false;
    }
    return true;
  });
};

class FormItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      message: "",
      first: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCheck = this.getCheck.bind(this);
  }

  componentDidMount() {
    const { updateStatus } = this.context;
    updateStatus(params => {
      const { children } = this.props;
      const key = children && children.props && children.props.key;
      if (key) {
        if (params.is__Value && typeof params[key] !== "undefined") {
          this.setState({
            value: params[key],
            first: params.is__clear?true:false
          });
          //更新值
          this.handleUpdata(params[key], params.is__clear);
        }

        if (params.is__Msg && typeof params[key] !== "undefined") {
          this.setState({
            message: params[key],
            first: false
          });
        }
      }
    });
  }

  //进行值检验
  getCheck = value => {
    const { children } = this.props;

    if (
      children.props.config &&
      children.props.config.rules &&
      children.props.config.rules.length > 0
    ) {
      if (!hasMessage(value, children.props.config.rules)) {
        this.setState({
          message: msg
        });
      } else {
        if (this.state.message) {
          this.setState({
            message: ""
          });
        }
      }
    }
  };

  handleChange = (e, config) => {
    let value;
    switch (config) {
      case "checkbox":
        value = e.target.checked;
        break;
      case "select":
        value = e.value;
        break;
      default:
        value = e.target.value;
    }

    if (this.state.first) {
      this.setState({
        first: false
      });
    }

    //更新值
    this.handleUpdata(value);

    //更新子节点的值
    this.setState({
      value: value
    });
  };

  //当值发生改变时进行状态更新
  handleUpdata(value, is__clear) {
    const { children } = this.props;

    if (!is__clear) {
      //对值进行校验
      this.getCheck(value);
    }

    //父节点记录值
    children.props.onChange(value,children.props.key,is__clear);
  }

  render() {
    const {
      label,
      style,
      labelStyle,
      vertical,
      children,
      inputStyle
    } = this.props;
    const { message, value, first } = this.state;

    const checked =
      children &&
      children.props &&
      typeof children.props.checked !== "undefined"
        ? children.props.checked
        : "";

    const initValue =
      children &&
      children.props &&
      children.props.config &&
      typeof children.props.config.defaultValue !== "undefined"
        ? children.props.config.defaultValue
        : "";

    const formItemCls = classnames({
      "kingdee-form-item": true,
      "kingdee-form-item__vertical": !!vertical
    });

    const labelCls = classnames({
      "kingdee-form-item-label": true,
      "kingdee-form-item-label__require": !!hasRequire(children)
    });

    const messageCls = classnames({
      "kingdee-form-item-message": true,
      "kingdee-form-item-message__error": !!message
    });

    return children ? (
      <div className={formItemCls} style={style}>
        <label
          htmlFor={
            children.component
              ? `${children.props.name}_${children.props.key}`
              : ""
          }
          className={labelCls}
          style={labelStyle}
        >{`${label}`}</label>
        <div className="kingdee-form-item-div" style={inputStyle}>
          {children.component ? (
            cloneElement(children.component, {
              id: `${children.props.name}_${children.props.key}`,
              onChange: this.handleChange,
              style: inputStyle,
              checked: checked,
              value: first ? initValue : value,
              status: message ? "error" : ""
            })
          ) : (
            <div className="kingdee-form-item-text">{children}</div>
          )}
          {children &&
          children.props &&
          children.props.config &&
          children.props.config.hasIcon
            ? children.props.config.hasIcon.icon
            : null}
          {message ? <div className={messageCls}>{message}</div> : null}
        </div>
      </div>
    ) : null;
  }
}

FormItem.contextTypes = {
  updateStatus: PropTypes.func
};

export default FormItem;
