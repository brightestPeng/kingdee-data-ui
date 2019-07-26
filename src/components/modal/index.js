/*
 * @Author: wenjia_peng
 * @Date: 2019-07-18 17:27:02
 * @Last Modified by: wenjia_peng
 * @Last Modified time: 2019-07-25 17:02:04
 */

import React from "react";
import ReactDOM from "react-dom";
import { Icon, Button } from "components";

import "./style/index.less";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: props.visible ? true : false
    };

    this.node = document.createElement("div");
    this.node.className = "kingdee-modal";
  }

  static getDerivedStateFromProps(props, state) {
    return {
      visible: props.visible
    };
  }

  componentDidMount() {
    document.body.appendChild(this.node);
  }

  render() {
    const {
      children,
      visible,
      onClose,
      onFooter,
      onOk,
      title,
      width,
      zIndex
    } = this.props;

    return ReactDOM.createPortal(
      <div
        style={{
          display: visible ? "block" : "none"
        }}
      >
        <div key="modal-shade" className="modal-shade" />
        <div
          key="modal-content"
          className="modal-content"
          style={{
            width: width ? width : 520,
            zIndex: zIndex ? zIndex : 1000
          }}
        >
          <div className="modal-content-header">
            <div className="left">
              <span className="title">{title ? title : "弹框"}</span>
              <Icon type="question" />
            </div>
            <div className="right">
              <Icon onClick={onClose} style={{}} type="close" />
            </div>
          </div>
          <div className="modal-content-children">{children}</div>
          <div className="modal-content-footer">
            {onFooter ? (
              onFooter
            ) : (
              <Button type="primary" onClick={onOk}>
                确认
              </Button>
            )}
          </div>
        </div>
      </div>,
      this.node
    );
  }
}

export default Modal;
