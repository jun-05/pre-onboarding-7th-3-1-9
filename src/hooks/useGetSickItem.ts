import { getSick } from 'apis/ClinicalService';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsLoading, setItems } from '../redux/reducer/searchSlice';

const useGetSickItem = () => {
  const dispatch = useAppDispatch();
  const { searchWord } = useAppSelector(({ search }) => search);

  useEffect(() => {
    const getSickName = async () => {
      try {
        dispatch(setIsLoading(true));
        const searchResult = await getSick(searchWord);
        dispatch(setItems(searchResult));
        dispatch(setIsLoading(false));
      } catch (err) {
        dispatch(setIsLoading(false));

        if (err instanceof AxiosError) {
          console.error(err.response?.data);
        } else {
          console.error(err);
        }
      }
    };
    const delay = setTimeout(() => getSickName(), 300);

    return () => clearTimeout(delay);
  }, [searchWord, dispatch]);
};

export default useGetSickItem;
