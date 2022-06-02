
  type propsHeading = {
    level: number,
    title?: string,
    className ?: string,
    H: JSX.IntrinsicElements
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