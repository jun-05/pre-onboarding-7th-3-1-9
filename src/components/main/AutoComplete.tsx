import React from 'react';
import styled from 'styled-components';

function AutoComplete() {
  return (
    <Wrapper>
      <Label>추천검색어</Label>
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
  min-height: 300px;
  height: 100%;
  padding: 15px;
  text-align: left;
  top: 80px;
`;

const Label = styled.label`
font-size: 10px;
color: ${({ theme }) => theme.darkgray}
font-weight: 700;
`;

export default AutoComplete;
