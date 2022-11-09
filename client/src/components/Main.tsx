import * as S from '../styles/MainStyle';
import SearchRec from './SearchRec';
import InputStyle from 'styles/InputStyle';
import { setSearchWords, setOnFocus } from 'redux/reducer/searchSlice';
import { useAppSelector, useAppDispatch } from 'redux/reducer/hooks';

function Main() {
  const dispatch = useAppDispatch();
  const { searchWords } = useAppSelector(state => state.searchData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWords(e.currentTarget.value));
    console.log(searchWords);
  };

  const onFocusInput = () => {
    dispatch(setOnFocus(true));
  };
  const onBlur = () => {
    dispatch(setOnFocus(false));
  };
  return (
    <S.MainLayout>
      <InputStyle onChange={onChange} onFocus={onFocusInput} onBlur={onBlur} />
      <SearchRec />
    </S.MainLayout>
  );
}

export default Main;
