import * as S from '../styles/MainStyle';
import { useAppSelector } from 'redux/reducer/hooks';

function RecommendWords() {
  const { searchData } = useAppSelector(state => state.searchData);

  // 배열의 객제
  if (searchData.length === 0) {
    return <S.recomText> 추천검색어가 없습니다... </S.recomText>;
  }

  return (
    <div>
      {searchData.map(({ sickNm }, idx) => {
        return (
          <>
            <S.recomText key={idx}>
              <S.recomIcon />
              <S.recomTexts>{sickNm}</S.recomTexts>
            </S.recomText>
          </>
        );
      })}
    </div>
  );
}

export default RecommendWords;
