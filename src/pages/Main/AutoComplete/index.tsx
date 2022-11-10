import React from 'react';
import { useAppSelector } from 'redux/hooks';
import AutoComplete from './AutoComplete';
import { DropDownBox } from './styles';

const AutoCompleteIndex = () => {
  const isOpen = useAppSelector(({ search }) => search.isOpen);

  return (
    <DropDownBox className={isOpen ? 'active' : ''}>
      <AutoComplete />
    </DropDownBox>
  );
};

export default AutoCompleteIndex;
