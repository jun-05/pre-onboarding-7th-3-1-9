import * as S from '../styles/MainStyle';
import SearchRec from './SearchRec';

function Main() {
  return (
    <S.MainLayout>
      <S.MainTitle>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </S.MainTitle>
      <S.MainSearchInputBox>
        <S.MainSearchInput placeholder="질환명을 입력해 주세요." />
        <S.SearchIcon />
      </S.MainSearchInputBox>
      <SearchRec />
    </S.MainLayout>
  );
}

export default Main;
