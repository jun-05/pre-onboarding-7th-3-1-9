import { TitleWrapper } from "./style"
import { ITitle } from "../../interface/types"


const Title = ({topContent, bottomContent}:ITitle) => {
  return (
    <TitleWrapper>
      <h1>{topContent}<br />{bottomContent}</h1>
    </TitleWrapper>
  )
}

export default Title