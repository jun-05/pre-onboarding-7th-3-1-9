import { ReactComponent as Magnifying } from 'assets/Magnifying.svg';
import useGetSickItem from 'hooks/useGetSickItem';
import { useAppSelector } from '../../../redux/hooks';
import { DropDownItem } from './styles';

const AutoComplete = () => {
  const data = useGetSickItem();

  const { searchWord, isLoading, selectIndex } = useAppSelector(({ search }) => search);

  return (
    <>
      {searchWord !== '' && (
        <>
          <DropDownItem>
            <span className="search_icon">
              <Magnifying />
            </span>
            <span className="search_text">
              <span className="font_bold">{searchWord}</span>
            </span>
          </DropDownItem>
          <p>추천 검색어</p>
        </>
      )}
      {isLoading && (
        <DropDownItem>
          <span className="search_text">로딩중...</span>
        </DropDownItem>
      )}
      {data.map(({ sickNm }, index) => {
        const textArray = sickNm.split(searchWord);
        return (
          <DropDownItem key={index} className={selectIndex === index ? 'over' : ''}>
            <span className="search_icon">
              <Magnifying />
            </span>
            {textArray.map((item, i) => (
              <span key={i} className="search_text">
                {item}
                {i !== textArray.length - 1 && <span className="font_bold">{searchWord}</span>}
              </span>
            ))}
          </DropDownItem>
        );
      })}
      {data.length === 0 && (
        <DropDownItem>
          <span className="search_text">검색어가 없습니다</span>
        </DropDownItem>
      )}
    </>
  );
};

export default AutoComplete;
