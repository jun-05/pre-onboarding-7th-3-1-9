import styled from "styled-components";

export const AutoSearchDataLi = styled.li`
  display:flex;
  padding: 10px;
  font-size: 14px;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  &.select{
    background-color:#d2d2d2;
  }
  position: relative;
  .font_bold{
    font-weight: bold;
  }
`;