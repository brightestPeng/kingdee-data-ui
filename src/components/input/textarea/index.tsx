import React from "react";

interface iProps {
    value?: string;
    defaultValue?: string;
    type?: string;
    style?: object;
    status?: string;
    //   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [propName: string]: any;
  }


const TextArea: React.FC<iProps> = props => {

    console.log(props);

    return(
        <div>1232</div>
    )
}

export default TextArea;
