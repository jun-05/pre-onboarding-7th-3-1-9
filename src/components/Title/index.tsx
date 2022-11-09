import { TitleWrapper } from "./style"

interface ITitle {
  topContent : string,
  bottomContent : string
}

const Title = ({topContent, bottomContent}:ITitle) => {
  return (
    <TitleWrapper>
      <h1>{topContent}<br />{bottomContent}</h1>
    </TitleWrapper>
  )
}

export default Title