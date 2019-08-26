import React, { Fragment, createRef } from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";

import "./style/index.less";

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      x: 0,
      y: 0,
      width:0
    };

    this.node = document.createElement("div");
    this.node.className = "kingdee-dropdown";
    this.myRef = createRef();
    this.handleHover = this.handleHover.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }

  componentDidMount() {
    let x = this.myRef.current.offsetTop + this.myRef.current.offsetHeight;
    let y = this.myRef.current.offsetLeft;
    let width = this.myRef.current.offsetWidth;
    document.body.appendChild(this.node);

    this.setState({
      x,
      y,
      width
    });

    window.addEventListener("scroll",()=>{
      
    })
  }

  //鼠标移入
  handleHover() {
    this.setState({
      visible: true
    });
  }

  //鼠标移入
  handleOut() {
    this.setState({
      visible: false
    });
  }

  render() {
    const { children, list } = this.props;
    const { x, y, visible,width } = this.state;

    const dpCls = classnames({
      "kingdee-ui-link": true,
      "kingdee-ui-link--active": false
    });

    return (
      <div
        className={dpCls}
        ref={this.myRef}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleOut}
      >
        {children}
        {createPortal(
          <div
            className="kingdee-ui-dropdown"
            style={{
              top: x,
              left: y,
              display: visible ? "block" : "none",
              minWidth:width
            }}
          >
            {list}
          </div>,
          this.node
        )}
      </div>
    );
  }
}

export default DropDown;
