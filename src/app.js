import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "components/modal";
import TimeLine from "components/time-line";
import Button from "components/button";
import Input from "components/input";
import Form from "components/form";
import Icon from "components/icon";

import Test from "./test";

const FormItem = Form.Item;

// import "./style/default.less";
const editData = {};

const AppTest = ({ form }) => {
  const [count, setCount] = useState(false);
  const { defineField } = form;

  const handleClick = () => {
    const { submitForm } = form;

    submitForm((err, data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <Input type="checkbox" value={count} onChange={()=>{
        setCount(!count)
      }} />
      <Form>
        <div style={{ display: "flex", marginLeft: "5%" }}>
          <div style={{ width: "50%" }}>
            <FormItem label="客户名称">
              <span>新瞳(上海)医院管理有限公司</span>
            </FormItem>
          </div>
          <div style={{ width: "50%" }}>
            <FormItem label="风险等级" inputStyle={{ width:"30%" }} >
              <span>12324234123421 34</span>
            </FormItem>
          </div>
        </div>
        <FormItem label="风险指标项" labelStyle={{ width: "19%" }}>
          <span>{editData.riskIndicator}</span>
        </FormItem>
        <FormItem label="风险跟进状态" labelStyle={{ width: "19%" }}>
          {defineField("riskStatus1",{
            checked:true,
            defaultValue:true
          })(<Input type="checkbox" />)}
        </FormItem>
        <FormItem label="风险跟进状态" labelStyle={{ width: "19%" }}>
          {defineField("riskStatus", {
            hasIcon: {
              icon: <Icon type="question" />,
              callback: () => {
                console.log("点击Icon");
              }
            },
            rules: [{ require: true, message: "风险跟进状态不能为空！" }]
          })(<Input />)}
        </FormItem>
        <FormItem label="风险原因" labelStyle={{ width: "19%" }}>
          {defineField("riskReason", {
            rules: [{ require: true, message: "风险原因状态不能为空！" }],
            defaultValue: "预计流失"
          })(
            <Input
              type="select"
              options={[
                { value: '续费风险', label: '续费风险' },
                { value: '预计流失', label: '预计流失' }
              ]}
            />
          )}
        </FormItem>
        <FormItem label="是否总部协助" labelStyle={{ width: "19%" }}>
          {defineField("needAssist")(<Input />)}
        </FormItem>
        <FormItem label="备注" labelStyle={{ width: "19%" }}>
          {defineField("remark",{
            defaultValue:""
          })(<Input type="textarea" />)}
        </FormItem>
      </Form>
      <Button onClick={handleClick}>提交</Button>
      <Test />
    </div>
  );
};

const App = Form.create()(AppTest);

ReactDOM.render(<App />, document.getElementById("root"));
