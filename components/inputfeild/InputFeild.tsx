import { forwardRef } from "react";

interface InputFeild{
    placeholder?: string,
    inputtype: string,
    inputclass?: string
} 

const InputFeild : React.FC<InputFeild> = (props) =>{
  return  <input {...props} />;

}


// const InputFeild = forwardRef((props: InputFeild, ref: React.Ref<HTMLInputElement>) => {
//     return <input ref={ref} {...props} />;
//   });


InputFeild.defaultProps = {
    placeholder: "",
    inputtype: "text",
    inputclass: ""
  }
export default InputFeild;
