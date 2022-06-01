
  type propsHeading = {
    level: number,
    title?: any,
    className ?: string
  }
  const Heading: React.FC<propsHeading> = (props) => {
      const {title,level} = props;
    const H  = `h${level}`
    return (
        <>
            <H>
                {title}
            </H>
        </>
    )
  }
  export default Heading