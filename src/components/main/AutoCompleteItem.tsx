import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { useAppSelector } from '../../redux/hooks';

type AutoCompleteItemProps = {
  text: string;
};

function AutoCompleteItem({ text }: AutoCompleteItemProps) {
  const { searchWord } = useAppSelector(state => state.search);
  return (
    <>
      <Wrapper>
        <StyledSearchIcon />
        <SearchResultWord>{text}</SearchResultWord>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;
const StyledSearchIcon = styled(SearchIcon)`
  width: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const SearchResultWord = styled.h3`
  margin-left: 30px;
`;

export default AutoCompleteItem;
