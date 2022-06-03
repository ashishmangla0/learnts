import React, { forwardRef } from "react";

interface InputFeild{
    placeholder?: string,
    inputtype: string,
    inputclass?: string
} 


const InputFeild = React.forwardRef((props: InputFeild, ref: React.Ref<HTMLInputElement>) => {
    return <input ref={ref} {...props} />;
  });


InputFeild.defaultProps = {
    placeholder: "",
    inputtype: "text",
    inputclass: ""
  }
export default InputFeild;
