import React, { useState } from "react";
import Button from "components/button";
import Input from "components/input";
import Form from "components/form";
import Icon from "components/icon";

const FormItem = Form.Item;

// import "./style/default.less";
const editData = {}

const Test = ({ form }) => {
  const [count, setCount] = useState(false);
  const { defineField } = form;

  const handleClick = () => {
    const { submitForm } = form;

    submitForm((err,data)=>{
      console.log(data);
    });
  };

  return (
    <div>
      <Form>
        <div style={{ display: "flex", marginLeft: "5%" }}>
          <div style={{ width: "50%" }}>
            <FormItem label="客户名称">
              <span>{editData.custName}</span>
            </FormItem>
          </div>
          <div style={{ width: "50%" }}>
            <FormItem label="风险等级">
              <span>{editData.riskLevel}</span>
            </FormItem>
          </div>
        </div>
        <FormItem label="风险指标项" labelStyle={{ width: "19%" }} >
          <span>{editData.riskIndicator}</span>
        </FormItem>
        <FormItem label="风险跟进状态" labelStyle={{ width: "19%" }}>
          {defineField("riskStatus",{
            hasIcon:{
              icon:<Icon  type="question" />,
              callback:()=>{
                console.log("点击Icon");
              }
            },
            rules:[
              {require:true,message:"风险跟进状态不能为空！"}
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="风险原因" labelStyle={{ width: "19%" }}>
          {defineField("riskReason",{
            rules:[
              {require:true,message:"风险原因状态不能为空！"}
            ]
          })(<Input type="select" options={[
            { key:"none",value:"",title:"无" },
            { key:"true",value:"true",title:"是" },
            { key:"false",value:"false",title:"否" }
          ]} />)}
        </FormItem>
        <FormItem label="是否总部协助" labelStyle={{ width: "19%" }}>
          {defineField("needAssist")(<Input />)}
        </FormItem>
        <FormItem label="备注" labelStyle={{ width: "19%" }}>
          {defineField("remark")(<Input type="textarea" />)}
        </FormItem>
      </Form>
      <Button onClick={handleClick} >提交</Button>
    </div>
  );
};

const App = Form.create({
    name:"risk_form"
})(Test);

export default App;
