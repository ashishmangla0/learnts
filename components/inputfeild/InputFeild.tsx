interface InputFeild{
    placeholder?: string,
    inputType: string,
    inputClass?: string
} 

const InputFeild: React.FC<InputFeild> = (props) => {
    const {placeholder,inputType,inputClass} = props;
    return(
            <input 
            className={inputClass}
                type={inputType} 
                placeholder={placeholder}
            />
    )
}

InputFeild.defaultProps = {
    placeholder: "",
    inputType: "text",
    inputClass: ""
  }
export default InputFeild;
