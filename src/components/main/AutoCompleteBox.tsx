import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import AutoCompleteItem from './AutoCompleteItem';

function AutoCompleteBox() {
  const {sickData} = useAppSelector(state => state.search);
  return (
    <Wrapper>
      <Label>추천검색어</Label>
      <SearchWordsWrapper>
        {sickData.map(({sickNm}, idx)=> {
          return (<>
            <AutoCompleteItem 
            key={idx} 
            text={sickNm}/>
          </>)
        })}
      </SearchWordsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  position: absolute;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.4rem;
  border: none;
  cursor: default;
  width: 478px;
  padding: 15px;
  text-align: left;
  top: 80px;
`;

const Label = styled.label`
font-size: 10px;
color: ${({ theme }) => theme.darkgray}
font-weight: 700;
`;

const SearchWordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0px;
  row-gap: 20px;
  height: 100%;
  min-height: 50px;
`

export default AutoCompleteBox;
