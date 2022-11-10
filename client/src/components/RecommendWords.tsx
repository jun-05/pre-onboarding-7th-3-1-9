import * as S from '../styles/MainStyle';
import { useAppSelector } from 'redux/reducer/hooks';

function RecommendWords() {
  const { searchData, searchWords } = useAppSelector(state => state.searchData);

  // 배열의 객제

  return (
    <div>
      {searchData.map(({ sickNm }, idx) => {
        return (
          <S.recomText key={idx}>
            <span> {sickNm}</span>
          </S.recomText>
        );
      })}
    </div>
  );
}

export default RecommendWords;
