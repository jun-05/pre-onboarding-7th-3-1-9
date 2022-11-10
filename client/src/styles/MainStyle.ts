import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const MainLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 450px;
  background-color: #cbe9ff;
`;

export const MainTitle = styled.h1`
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const MainSearchInputBox = styled.div`
  width: 450px;
  height: 70px;
  margin: auto;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 70px;
  padding: 0 10px;
`;

export const SearchIcon = styled(BiSearch)`
  width: 50px;
  padding: 10px;
  height: 50px;
  border-radius: 50px;
  background-color: #007be9;
  color: #fff;
  cursor: pointer;
`;

export const MainSearchInputStyle = styled.input`
  width: 90%;
  height: 60px;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  margin-left: 1rem;
`;

export const SearchRecLayout = styled.div`
  margin: auto;
  margin-top: 10px;
  width: 450px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  max-height: 500px;
  overflow: auto;
`;

export const RecentWords = styled.p`
  color: #aaa;
  font-size: 1rem;
  font-weight: 500;
`;

export const recomText = styled.div`
  font-weight: 300;
  margin-top: 10px;
  color: #555;
`;
