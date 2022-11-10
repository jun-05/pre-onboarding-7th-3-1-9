import styled from '@emotion/styled';
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import { SearchButton } from './SearchButton';

export function SickSearchInput({
  onChange,
  onClick,
  onKeyUp,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLParagraphElement>;
  onKeyUp: KeyboardEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <Container>
        <Input
          type="search"
          placeholder="질환명을 입력해주세요"
          onChange={onChange}
          onClick={onClick}
          onKeyUp={onKeyUp}
        />

        <SearchButton />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 490px;
  width: 100%;
  position: relative;
  display: flex;
`;

const Input = styled.input`
  border-radius: 42px;
  width: 100%;
  padding: 20px 48px 20px 50px;
  font-size: 1.6rem;
  line-height: 1.6;
  background-color: #fff;
  background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
  background-position: 20px center;
  background-size: 22px;
  background-repeat: no-repeat;

  &:focus {
    padding: 20px 48px 20px 20px;
    background-image: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px 1.5px #007be9;
  }

  &::-webkit-search-cancel-button {
    position: relative;
    right: -20px;
    cursor: pointer;
  }

  &::placeholder {
    color: #a7afb7;
  }
`;
