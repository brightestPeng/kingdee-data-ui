import React from "react";
import "./style/index.less";
import Icon from "../icon";

interface itemProps {
  text:string;
  key: any;
  time: string;
  first?:boolean
}

interface iProps {
  data: Array<itemProps>;
}

const TimeLineItem: React.FC<itemProps> = props => {

  return (
    <div className="kingdee-timeline-item">
      {
          props.first?<Icon type="location" />:<div className="kingdee-timeline-item--point" />
      }
      <div>{props.text}</div>
      <time className="kingdee-timeline-item--time">{props.time}</time>
    </div>
  );
};

const TimeLine: React.FC<iProps> = props => {
  return (
    <div className="kingdee-timeline">
      {props.data.map((index,key) => {

        return <TimeLineItem first={key===0} key={index.key} {...index} />;
      })}
    </div>
  );
};

export default TimeLine;
