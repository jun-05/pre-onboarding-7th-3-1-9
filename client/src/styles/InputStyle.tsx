import React from 'react';
import * as S from './MainStyle';
import { useAppSelector } from 'redux/reducer/hooks';

function InputStyle({ onChange, onFocus, onBlur }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { searchWords } = useAppSelector(state => state.searchData);
  return (
    <div>
      <S.MainTitle>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </S.MainTitle>
      <S.MainSearchInputBox>
        <S.MainSearchInputStyle
          onChange={onChange}
          onFocus={onFocus}
          value={searchWords}
          onBlur={onBlur}
          placeholder="질환명을 입력해 주세요"
        />
        <S.SearchIcon />
      </S.MainSearchInputBox>
    </div>
  );
}

export default InputStyle;
