import React from "react";
import PropTypes from "prop-types";

const withForm = (config) => InnerComponent => {
  return class WarpComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        form: {
          defineField: () => () => null,
          submitForm: () => null,
          clearAllFields: () => null,
          setFields: () => null,
        },
        count:0
      };

      this.setForm = this.setForm.bind(this);
    }

    static childContextTypes = {
      setForm: PropTypes.func,
      name: PropTypes.string
    };

    // 返回Context对象
    getChildContext() {
      return {
        setForm: this.setForm,
        name: config && config.name ? config.name : `kingdee-form`
      };
    }

    //setForm属性
    setForm(form) {
      this.setState({
        form: form
      });
    }

    render() {
      return <InnerComponent {...this.props} form={this.state.form} />;
    }
  };
};

export default withForm;
