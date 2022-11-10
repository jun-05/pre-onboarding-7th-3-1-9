import Main from 'components/Main';
import useAddSearch from 'hooks/useAddSearch';
import * as S from '../styles/MainStyle';
import Nav from '../assets/clinic-page-1.png';
import section from '../assets/clinic-page-3.png';
import bottom from '../assets/clinic-page-4.png';

function MainPage() {
  useAddSearch();
  return (
    <S.MainPageLaout>
      <img src={Nav} alt="네브" />
      <Main />
      <img src={section} alt="섹션" />
      <img src={bottom} alt="푸터" />
    </S.MainPageLaout>
  );
}

export default MainPage;
