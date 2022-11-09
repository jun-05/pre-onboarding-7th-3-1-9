import { ReactComponent as Magnifying } from 'assets/Magnifying.svg';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';

const AutoCompleteItem = () => {
  const { searchWord, items, isLoading, selectIndex } = useAppSelector(({ search }) => search);
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
      {items.map(({ sickNm }, index) => {
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
      {items.length === 0 && (
        <DropDownItem>
          <span className="search_text">검색어가 없습니다</span>
        </DropDownItem>
      )}
    </>
  );
};

const DropDownItem = styled.li`
  position: relative;
  padding: 0 16px 0 42px;
  height: 42px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &.over {
    background-color: #e2e2e2;
  }
  span.search_icon {
    position: absolute;
    width: 16px;
    top: 14px;
    left: 18px;

    z-index: 1;
  }
  span.search_text {
    line-height: 42px;

    span.font_bold {
      font-weight: bold;
    }
  }
`;

export default AutoCompleteItem;
