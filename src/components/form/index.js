import React from "react";
import create from "./withForm";
import PropTypes from "prop-types";
import FormItem from "./form-item";

import "./style/index.less";

let defaultObj = {};

const hasMessage = (value, rules, error, errors, key) => {
  return rules.every(index => {
    if (index.require && !value.trim()) {
      error = index.message ? index.message : error;
      errors[key] = error;
      return false;
    }
    if (index.regExp && !new regExp(index.regExp).test(value)) {
      error = index.message ? index.message : error;
      errors[key] = error;
      return false;
    }
    return true;
  });
};

const checkError = (state, obj) => {
  let errors = {};
  Object.keys(obj).forEach(index => {
    let value = obj[index].defaultValue ? obj[index].defaultValue : "";
    if (typeof state[index] !== "undefined") {
      value = state[index].value;
    }

    if (obj[index].rules && obj[index].rules.length > 0) {
      hasMessage(value, obj[index].rules, `${index} error`, errors, index);
    }
  });
  return errors;
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      callbacks: [],
      errors: []
    };

    this.defineField = this.defineField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    const { setForm } = this.context;
    if (setForm) {
      setForm({
        defineField: this.defineField,
        submitForm: this.submitForm
      });
    }
  }

  //发现错误更新子组件状态
  updateStatus(callback) {
    const { callbacks } = this.state;

    if (typeof callback === "function") {
      callbacks.push(callback);
      this.setState({
        callbacks
      });
    }
  }

  static childContextTypes = {
    updateStatus: PropTypes.func
  };

  // 返回Context对象
  getChildContext() {
    return {
      updateStatus: this.updateStatus
    };
  }

  //规定context对象
  static contextTypes = {
    setForm: PropTypes.func,
    name: PropTypes.string
  };

  //进行数据绑定
  handleChange(value, key) {
    const { name } = this.context;

    this.setState({
      [`${key}`]: Object.assign(
        { value: value },
        {
          ...defaultObj[`${name}`][key]
        }
      )
    });
  }

  //更新字段
  setFields(params) {
    const { callbacks } = this.state;
    params.isValue = true;
    callbacks.forEach(cb => {
      cb(params);
    });
  }

  //更新错误提示
  setErrors(params) {
    const { callbacks } = this.state;
    params.isMsg = true;
    callbacks.forEach(cb => {
      cb(params);
    });
  }

  //定义上层方法
  defineField(key, config) {
    const { name } = this.context;

    return InnerComponent => {
      if (!defaultObj[`${name}`]) {
        defaultObj[`${name}`] = {};
      }
      defaultObj[`${name}`][`${key}`] = {
        ...config
      };

      return {
        component: InnerComponent,
        props: {
          key: key,
          name: name,
          config: config,
          onChange: e => {
            this.handleChange(e, key);
          },
          checked: config && config.checked,
          defaultValue:
            config && typeof config.defaultValue !== "undefined"
              ? config.defaultValue
              : "",
          value: ""
        }
      };
    };
  }

  //提交表单
  submitForm(callback) {
    let data = {};
    const { name } = this.context;
    let errors = {};

    if (name && defaultObj[name]) {
      defaultObj[name] &&
        Object.keys(defaultObj[name]).forEach(index => {
          if (typeof this.state[index] !== "undefined") {
            data[index] = this.state[index].value;
          } else {
            data[index] =
              defaultObj[name][index] &&
              defaultObj[name][index] &&
              typeof defaultObj[name][index].defaultValue !== "undefined"
                ? defaultObj[name][index].defaultValue
                : "";
          }
        });
      errors = checkError(this.state, defaultObj[`${name}`]);

      //更新错误提示
      this.setErrors(errors);
      delete errors.isMsg;
    }

    let errorsArgs = Object.keys(errors).map(index => {
      return {
        index,
        error: errors[index]
      };
    });

    if (errorsArgs.length === 0) {
      errorsArgs = null;
    }

    callback(errorsArgs, data);
  }

  render() {
    const { children } = this.props;
    return <form className="kingdee-form">{children}</form>;
  }
}

Form.create = create;
Form.Item = FormItem;

export default Form;
