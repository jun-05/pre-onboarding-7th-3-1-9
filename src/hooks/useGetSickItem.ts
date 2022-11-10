import { ISicks } from '@types';
import { getSick } from 'apis/ClinicalService';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setIsLoading, setItemsLength } from '../redux/reducer/searchSlice';

const useGetSickItem = () => {
  const dispatch = useAppDispatch();
  const { searchWord } = useAppSelector(({ search }) => search);

  const [items, setItems] = useState<ISicks[]>([]);

  useEffect(() => {
    const getSickName = async () => {
      try {
        dispatch(setIsLoading(true));
        const searchResult = await getSick(searchWord);
        setItems(searchResult);
        dispatch(setItemsLength(searchResult.length));
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

  return items;
};

export default useGetSickItem;
