type ButtonProps = {
    value: string | React.ReactElement;
    buttonClass?: string;
    handleButtonClick?: React.MouseEventHandler<HTMLButtonElement>
} 
const Button: React.FC<ButtonProps>  = (props) =>{
    const {value,buttonClass,handleButtonClick} = props

return <button className={buttonClass} onClick={handleButtonClick}>
    {value}
</button>
}

Button.defaultProps = {
    value: "",
    buttonClass: "",
    handleButtonClick:() =>{}
  }
export default Button