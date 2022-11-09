import React from 'react';
import styled from 'styled-components';
import useGetSickItem from '../../hooks/useGetSickItem';
import AutoComplete from './AutoComplete';
import SearchBar from './SearchBar';

const MainPage = () => {
  useGetSickItem();

  return (
    <>
      <StyledHeader />
      <StyledMain>
        <StyledTitle>
          <h2>
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h2>
        </StyledTitle>
        <StyledSearchDiv>
          <SearchBar />
          <AutoComplete />
        </StyledSearchDiv>
      </StyledMain>
    </>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 56px;
`;

const StyledMain = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 462px;
  background-color: #cae9ff;

  padding: 80px 0 160px;
`;

const StyledTitle = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;

  h2 {
    font-size: 2.125rem;
    font-weight: bold;
    line-height: 3rem;
    text-align: center;
  }
`;

const StyledSearchDiv = styled.div`
  width: 490px;
  margin: 0 auto;

  position: relative;
`;

export default MainPage;
