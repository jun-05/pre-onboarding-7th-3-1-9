import {InputWrapper, Search, IconWrapper,BlueBox} from './style'
import SearchIcon from '../../assets/SearchIcon'

interface ISearch{
  keyword : string;
  onChangeData: any
}


const SearchBar = ({keyword, onChangeData}:ISearch) => {
  return(
    <InputWrapper>
    <IconWrapper>
      <SearchIcon />
    </IconWrapper>
    <Search value={keyword} onChange={onChangeData} />
    <BlueBox>검색</BlueBox>
  </InputWrapper>
  )
}

export default SearchBar