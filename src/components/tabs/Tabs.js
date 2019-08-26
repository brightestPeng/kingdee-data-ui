import React, { Component, Children } from "react";
import classnames from "classnames";

import "./style/index.less";

// defaultActiveKey  默认激活的key
// activeKey  激活的key
// onChange   发生改变时的回调

class Tabs extends Component {
  constructor(props) {
    super(props);
    const { defaultActiveKey, needContent } = props;

    this.state = {
      defaultActiveKey: defaultActiveKey,
      needContent: !!needContent
    };
  }

  //点击tab
  handleClick(key) {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(key);
    }
  }

  render() {
    const { defaultActiveKey, noChange, needContent } = this.state;
    const { children, activeKey } = this.props;

    return (
      <div className="kingdee-ui-tabs">
        <div className="kingdee-ui-tabs_list">
          {Children.map(children, item => {
            if (item === null) return null;

            const { key, type, props } = item;

            const itemCls = classnames({
              "kingdee-ui-tabs_item": true,
              "kingdee-ui-tabs_item--active":
                typeof activeKey !== "undefined"
                  ? activeKey === key
                  : defaultActiveKey === key
            });

            if (type.name === "TabPane") {
              return (
                <div
                  className={itemCls}
                  key={key}
                  onClick={e => {
                    this.handleClick(key);
                  }}
                >
                  {props.tab}
                </div>
              );
            }
            return null;
          })}
        </div>
        {needContent ? (
          <div>
            {Children.map(children, (item, itemkey) => {
              const { key, type } = item;
              if (type.name === "TabPane") {
                if (noChange) {
                  if (typeof defaultActiveKey !== "undefined") {
                    return key === defaultActiveKey && <div>{item}</div>;
                  } else {
                    return itemkey === 0 && <div>{item}</div>;
                  }
                } else {
                  return key === activeKey && <div>{item}</div>;
                }
              }
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Tabs;
