import { IProps } from '../../interface/types'
import AutoSearchData from'../../components/AutoSearchData'
import { AutoSearchContainer, AutoSearchWrap, Recommended } from './style'

const AutoSearchDataContainer = ({keyItems, selectIndex, setKeyword, keyword} : IProps) => {
  return(
    <AutoSearchContainer>
    <AutoSearchWrap>
      <Recommended>추천 검색어</Recommended>
      {keyItems.map((search, index) => (
        <AutoSearchData key={search.sickCd} selectIndex={selectIndex} index={index} name = {search.sickNm} setKeyword={setKeyword} keyword={keyword}/>
      ))}
    </AutoSearchWrap>
  </AutoSearchContainer>
  )
}


export default AutoSearchDataContainer