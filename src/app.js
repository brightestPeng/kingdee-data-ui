import React, { useState } from "react";
import ReactDOM from "react-dom";

import Tabs from "./components/tabs";
import DropDown from "./components/drop-down";
import Icon from "./components/icon";

import Modal from "./components/modal";
import Button from "./components/button";
import Form from "./components/form";
import Input from "./components/input";

import "./app.less";

const { Tabpane } = Tabs;
const FormItem = Form.Item;

const config = {
  暂时无风险: [
    {
      label: "项目在测试环境正常实施中",
      value: "项目在测试环境正常实施中"
    },
    {
      label: "客户有多个环境，在其他环境正常使用",
      value: "客户有多个环境，在其他环境正常使用"
    },
    {
      label: "客户业务特性不常用",
      value: "客户业务特性不常用"
    },
    {
      label: "假期期间未使用",
      value: "假期期间未使用"
    },
    {
      label: "数据异常，客户正常使用",
      value: "数据异常，客户正常使用"
    }
  ],
  风险待解除: [
    {
      label: "系统部分功能暂时未能满足客户需求",
      value: "系统部分功能暂时未能满足客户需求"
    },
    {
      label: "客户由于操作不熟练暂停使用",
      value: "客户由于操作不熟练暂停使用"
    },
    {
      label: "客户内部组织架构短期内进行调整，调整后可能会继续使用",
      value: "客户内部组织架构短期内进行调整，调整后可能会继续使用"
    },
    {
      label: "客户关键决策人员离职，需要重新进行商务",
      value: "客户关键决策人员离职，需要重新进行商务"
    },
    {
      label: "项目由于客户原因中断，有可能重启",
      value: "项目由于客户原因中断，有可能重启"
    },
    {
      label: "客户公司经营不善用户活跃下降",
      value: "客户公司经营不善用户活跃下降"
    }
  ],
  风险预流失: [
    {
      label: "客户原因项目中断客户确认不再继续",
      value: "客户原因项目中断客户确认不再继续"
    },
    {
      label: "实施原因项目中断客户确认不再继续",
      value: "实施原因项目中断客户确认不再继续"
    },
    {
      label: "产品与客户业务不匹配，非目标客户",
      value: "产品与客户业务不匹配，非目标客户"
    },
    {
      label: "产品功能无法满足客户业务需求",
      value: "产品功能无法满足客户业务需求"
    },
    {
      label: "客户由于系统操作不熟练而不打算使用",
      value: "客户由于系统操作不熟练而不打算使用"
    },
    {
      label: "客户系统已换成竞品",
      value: "客户系统已换成竞品"
    },
    {
      label: "客户系统已换成金蝶其他产品",
      value: "客户系统已换成金蝶其他产品"
    },
    {
      label: "客户经营不善确认不使用系统",
      value: "客户经营不善确认不使用系统"
    },
    {
      label: "客户公司已经或即将倒闭",
      value: "客户公司已经或即将倒闭"
    },
    {
      label: "商务问题未解决客户不再使用",
      value: "商务问题未解决客户不再使用"
    }
  ]
};

const editData = {
  needAssist: "0",
  remark: "",
  riskReason: "",
  riskStatus: ""
};

const AppTest = ({ form }) => {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [activeKey, setActiveKey] = useState("");

  const { submitForm, defineField, clearAllFields, setFields } = form;

  const handleClose = () => {
    submitForm((error, data) => {
      console.log(error);
      console.log(form);

      if (error) {
        return false;
      }

      clearAllFields();
      setVisible(false);
    });
  };

  const handleChange = value => {
    setStatus(value);
    setFields({
      riskReason: ""
    });
  };

  const options = status
    ? config[status]
    : editData.riskStatus
    ? config[editData.riskStatus]
      ? config[editData.riskStatus]
      : []
    : config["暂时无风险"];

  console.log(options);

  const handleChange1 = key => {
    console.log("change1", key);
    setActiveKey(key);
  };

  const handleChange2 = e => {
    e.stopPropagation();
    console.log("change2");
  };

  return (
    <div className="hr-analysisi">
      <div className="test" >
        <div style={{ display:visible?"block":"none" }} >位移bug修复</div>
        <Tabs
          onChange={handleChange1}
          defaultActiveKey={"2"}
          activeKey={activeKey}
        >
          <Tabpane tab="金蝶集团" key="1" />
          <Tabpane
            tab={
              <DropDown
                list={
                  <ul>
                    <li onClick={handleChange2}>金蝶中国</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>
                }
              >
                子公司 <Icon type="down" />
              </DropDown>
            }
            key="2"
          />
          <Tabpane tab="tab3" key="3" />
        </Tabs>
      </div>
      <Button onClick={() => setVisible(!visible)}>点击</Button>

      {/* <Modal visible={visible}>字体测试模糊程度</Modal>
      <Modal
        title="风险客户跟进"
        onClose={() => setVisible(false)}
        visible={visible}
        onFooter={[
          <Button
            key="cancel"
            onClick={() => setVisible(false)}
            style={{ marginRight: "20px" }}
          >
            取消
          </Button>,
          <Button key="sure" type="primary" onClick={handleClose}>
            确定
          </Button>
        ]}
      >
        <Form>
          <div style={{ display: "flex", marginLeft: "5%" }}>
            <div style={{ width: "60%" }}>
              <FormItem label="客户名称" labelStyle={{ width: "32%" }}>
                <span>{editData.custName}</span>
              </FormItem>
            </div>
            <div style={{ width: "40%" }}>
              <FormItem
                label="风险等级"
                labelStyle={{ width: "38%" }}
                inputStyle={{ width: "60%" }}
              >
                <span>{editData.riskLevel}</span>
              </FormItem>
            </div>
          </div>
          <FormItem label="风险指标项" labelStyle={{ width: "23%" }}>
            <span>{editData.riskIndicator}</span>
          </FormItem>
          <FormItem label="风险跟进状态" labelStyle={{ width: "23%" }}>
            {defineField("riskStatus", {
              defaultValue: editData.riskStatus ? editData.riskStatus : "",
              rules: [{ require: true, message: "风险跟进状态不可为空！" }],
              onChange: handleChange
            })(
              <Input
                type="select"
                options={[
                  {
                    label: "暂时无风险",
                    value: "暂时无风险"
                  },
                  {
                    label: "风险待解除",
                    value: "风险待解除"
                  },
                  {
                    label: "风险预流失",
                    value: "风险预流失"
                  }
                ]}
              />
            )}
          </FormItem>
          <FormItem label="风险原因" labelStyle={{ width: "23%" }}>
            {defineField("riskReason", {
              defaultValue: editData.riskReason ? editData.riskReason : "",
              rules: [{ require: true, message: "风险原因不可为空！" }]
            })(<Input type="select" options={options} />)}
          </FormItem>
          <FormItem label="是否总部协助" labelStyle={{ width: "23%" }}>
            {defineField("needAssist", {
              defaultValue: editData.needAssist ? editData.needAssist + "" : "",
              rules: [{ require: true, message: "是否总部协助不可为空！" }]
            })(
              <Input
                type="select"
                options={[
                  {
                    label: "是",
                    value: "1"
                  },
                  { label: "否", value: "0" }
                ]}
              />
            )}
          </FormItem>
          <FormItem
            label="备注"
            style={{ marginBottom: 5 }}
            labelStyle={{ width: "23%" }}
          >
            {defineField("remark", {
              defaultValue: editData.remark ? editData.remark + "" : ""
            })(<Input type="textarea" maxLength={300} />)}
          </FormItem>
        </Form>
      </Modal> */}
    </div>
  );
};

const App = Form.create()(AppTest);

ReactDOM.render(<App />, document.getElementById("root"));
