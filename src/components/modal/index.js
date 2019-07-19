/*
 * @Author: wenjia_peng
 * @Date: 2019-07-18 17:27:02
 * @Last Modified by: wenjia_peng
 * @Last Modified time: 2019-07-19 16:32:33
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Icon from "../icon/index";

import "./style/index.less";

class Modal extends Component {
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
    const { children, visible, onClose, onFooter, onOk } = this.props;

    return ReactDOM.createPortal(
      <div
        style={{
          display: visible ? "block" : "none"
        }}
      >
        <div key="modal-shade" className="modal-shade" />
        <div key="modal-content" className="modal-content">
          <div className="modal-content-header">
            <div className="left">
              <span>弹框标题</span>
              <Icon
                style={{
                  cursor: "pointer",
                  marginLeft: 8
                }}
                type="question"
              />
            </div>
            <div className="right">
              <Icon
                onClick={onClose}
                style={{
                  cursor: "pointer"
                }}
                type="close"
              />
            </div>
          </div>
          <div className="modal-content-children">{children}</div>
          <div className="modal-content-footer">
            {onFooter ? onFooter : <button onClick={onOk}>确认</button>}
          </div>
        </div>
      </div>,
      this.node
    );
  }
}

export default Modal;
