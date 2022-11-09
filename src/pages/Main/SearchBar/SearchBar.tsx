import React from 'react';
import styled from 'styled-components';

const SearchBarUI = ({value, onChange, onFocus} : React.InputHTMLAttributes<HTMLInputElement> ) => {

  return (
    <>
      <StyledInput type="text" value={value} onChange={onChange} onFocus={onFocus} />
    </>
  );
};

const StyledInput = styled.input`
  width: 100%;

  border-radius: 42px;
  border: 2px solid;
  border-color: #FFFFFF;
  background-color: #FFFFFF;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: relative;

  padding: 20px 10px 20px 24px;
`;

export default SearchBarUI;
