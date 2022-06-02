type ButtonProps = {
    value: string | React.ReactElement;
    buttonClass?: string
} 
const Button: React.FC<ButtonProps>  = (props) =>{
    const {value,buttonClass} = props

return <button className={buttonClass}>
    {value}
</button>
}

Button.defaultProps = {
    value: "",
    buttonClass: "",
  }
export default Button