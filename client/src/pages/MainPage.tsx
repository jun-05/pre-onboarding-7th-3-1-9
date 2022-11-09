import Main from 'components/Main';
import useAddSearch from 'hooks/useAddSearch';

function MainPage() {
  useAddSearch();
  return (
    <div>
      <Main />
    </div>
  );
}

export default MainPage;
