import { AutoSearchDataLi } from './style'
import SearchIcon from '../../assets/SearchIcon'
import { IAutoSearchData } from '../../interface/types'

const AutoSearchData = ({ key, selectIndex, index, name, setKeyword, keyword }: IAutoSearchData) => {
  const textArray = name.split(keyword);
  return (
    <AutoSearchDataLi className={index === selectIndex ? 'select' : ''} key={key} onClick={() => setKeyword(name)} >
      <SearchIcon />
      {textArray.map((item, i) => (
        <span key={i} className="search_text">
          {item}
          {i !== textArray.length - 1 && <span className="font_bold">{keyword}</span>}
        </span>
      ))}
    </AutoSearchDataLi>
  )
}

export default AutoSearchData