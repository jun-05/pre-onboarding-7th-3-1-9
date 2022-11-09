import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const MainLayout = styled.div`
  width: 100%;
  height: 450px;
  background-color: #cbe9ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

export const MainSearchInputBox = styled.div`
  margin-top: 3rem;
  width: 450px;
  height: 70px;
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

export const MainSearchInput = styled.input`
  width: 90%;
  height: 60px;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  margin-left: 1rem;
`;

export const SearchRecLayout = styled.div`
  width: 450px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
`;

export const RecentWords = styled.p`
  color: #aaa;
  font-size: 1rem;
  font-weight: 500;
`;
