import * as S from '../styles/MainStyle';
import RecommendWords from './RecommendWords';

function SearchRec() {
  return (
    <S.SearchRecLayout>
      <S.RecentWords>추천 검색어</S.RecentWords>
      <RecommendWords />
    </S.SearchRecLayout>
  );
}

export default SearchRec;
