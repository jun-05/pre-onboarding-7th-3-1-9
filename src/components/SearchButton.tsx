import styled from '@emotion/styled';
import { SickSearchButtonIcon } from './Icon/SickSearchButtonIcon';

export function SearchButton() {
  return (
    <Button>
      <SickSearchButtonIcon />
    </Button>
  );
}

const Button = styled.button`
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  margin: auto;
  margin-right: 8px;
  border-radius: 50%;
  background-color: #007be9;
  cursor: pointer;

  svg {
    width: 21px;
    height: 21px;
    color: #fff;
  }
`;
