import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import AutoCompleteItem from './AutoCompleteItem';

const AutoCompleteUI = () => {
  const { isOpen } = useAppSelector(({ search }) => search);
  return (
    <DropDownBox className={isOpen ? 'active' : 'active'}>
      <AutoCompleteItem />
    </DropDownBox>
  );
};

const DropDownBox = styled.ul`
  &.active {
    display: flex;
  }
  display: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  width: 100%;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding: 20px 0;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  position: absolute;

  p {
    padding-left: 16px;
    font-size: 12px;
    color: #6c737b;
  }
`;

export default AutoCompleteUI;
