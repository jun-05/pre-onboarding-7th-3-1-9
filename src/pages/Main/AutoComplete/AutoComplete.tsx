import AutoCompleteItem from 'components/blocks/AutoCompleteItem';
import EmptyResult from 'components/blocks/EmptyResult';
// import LoadingText from 'components/blocks/LoadingText';
import Recommand from 'components/blocks/Recommand';
import useGetSickItem from 'hooks/useGetSickItem';
import { useAppSelector } from 'redux/hooks';

const AutoComplete = () => {
  const data = useGetSickItem();
  const { searchWord, selectIndex } = useAppSelector(({ search }) => search);
  
  // if(isLoading) return <LoadingText />
  return (
    <>
      {searchWord !== '' && <Recommand searchWord={searchWord} />}
      {/* {isLoading && <LoadingText />} */}
      {data.map(({ sickNm }, index) => {
        const textArray = sickNm.split(searchWord);
        return (
          <AutoCompleteItem key={index} index={index} searchWord={searchWord} selectIndex={selectIndex} textArray={textArray} />
        );
      })}
      {data.length === 0 && <EmptyResult />}
    </>
  );
};

export default AutoComplete;
