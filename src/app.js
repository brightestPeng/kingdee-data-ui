import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./modal";

// import "./style/default.less";

const App = () => {
  const [count, setCount] = useState(false);

  return (
    <div>
      <button onClick={() => setCount(true)}>展开弹窗</button>
      <Modal visible={count} onClose={() => setCount(false)}
      
        onOk={()=>{
            console.log(1111);
            setCount(false);
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
