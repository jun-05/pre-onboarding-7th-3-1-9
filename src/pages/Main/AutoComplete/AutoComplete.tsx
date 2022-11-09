import React from 'react';
import styled from 'styled-components';
import { SliceState } from 'redux/reducer/searchSlice';

const AutoCompleteUI = ({ searchWord, items, isLoading }: SliceState) => {
  if(isLoading) return (
    <DropDownBox>
      <DropDownItem>로딩중...</DropDownItem>
    </DropDownBox>
  )
  return (
      <DropDownBox>
        {items.length === 0 && <DropDownItem>최근 검색어가 없습니다</DropDownItem>}
        {items.map(({sickNm}, index) => {
          const textArray = sickNm.split(searchWord);
          return (
            <DropDownItem key={index}>{textArray.map((item, i) => (
              <span key={i}>
                {item}
                {i !== textArray.length - 1 && (
                  <span style={{fontWeight:"bold"}}>{searchWord}</span>
                )}
              </span>
            ))}</DropDownItem>
          );
        })}

        {/* {dropDownList.length === 0 && <DropDownItem>해당하는 단어가 없습니다</DropDownItem>}
        {dropDownList.map((dropDownItem, dropDownIndex) => {
          return (
            <DropDownItem
              key={dropDownIndex}
              onClick={() => clickDropDownItem(dropDownItem)}
              onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
              className={dropDownItemIndex === dropDownIndex ? 'selected' : ''}
            >
              {dropDownItem}
            </DropDownItem>
          );
        })} */}
      </DropDownBox>
  );
};

const DropDownBox = styled.ul`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  width: 100%;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  position: absolute;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`;

export default AutoCompleteUI;
