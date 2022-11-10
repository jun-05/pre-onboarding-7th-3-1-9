import {AutoSearchDataLi} from './style'
import SearchIcon from '../../assets/SearchIcon'
import {IAutoSearchData} from '../../interface/types'


const AutoSearchData = ({key, selectIndex, index, name, setKeyword} : IAutoSearchData) => {
  return(
    <AutoSearchDataLi className={index === selectIndex ? 'select' : ''} key={key} onClick={()=>setKeyword(name)}>
      <SearchIcon />
      <div>{name}</div>
    </AutoSearchDataLi>
  )
}

export default AutoSearchData