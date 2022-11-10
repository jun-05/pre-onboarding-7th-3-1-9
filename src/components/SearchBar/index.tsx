import {InputWrapper, Search, IconWrapper,BlueBox} from './style'
import SearchIcon from '../../assets/SearchIcon'
import { ISearch } from '../../interface/types'

const SearchBar = ({keyword, onChangeData, onKeyUp}:ISearch) => {
  return(
    <InputWrapper>
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Search value={keyword} onChange={onChangeData} onKeyUp={onKeyUp} />
    <BlueBox>검색</BlueBox>
  </InputWrapper>
  )
}

export default SearchBar