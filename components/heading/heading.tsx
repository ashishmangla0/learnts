
  type propsHeading = {
    level: number,
    title?: string,
    className ?: string
  }
  const Heading: React.FC<propsHeading> = (props) => {
      const {title,level} = props;
    const H  = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <>
            <H>
                {title}
            </H>
        </>
    )
  }
  
  export default Heading