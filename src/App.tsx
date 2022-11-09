import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import SearchIcon from './assets/SearchIcon'
import Title from './components/Title'
// import SearchBar from './components/SearchBar'
// import { searchDesease } from './api/desease';

interface autoDatas {
  sickCd: string;
  sickNm: string;
}
interface IDESEASE {
  includes(data: string): boolean;
  sickNm?: any;
}

function App() {
  const autoRef = useRef(null)
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };


  useEffect(() => {
    const updateData = async () => {
      const res = await fetchData();
      let b = res.filter((list: IDESEASE) => list.sickNm.includes(keyword) === true)
        .slice(0, 10);
      setKeyItems(b);
    }
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200)
    return () => {
      clearTimeout(debounce)
    }
  }, [keyword])
  const fetchData = async () => {
    const {data} = await axios.get('http://localhost:4000/sick')
    return data
  }
  return (
    <Layout>
      <SearchContainer>
        <Title topContent={'국내 모든 임상시험 검색하고'}  bottomContent={'온라인으로 참여하기'}/>
        <InputWrapper>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <Search value={keyword} onChange={onChangeData} />
          <BlueBox>검색</BlueBox>
        </InputWrapper>
        {/* <>
        <SearchBar ={keyword} onChangeData={onChangeData} />
        </> */}
        {keyItems.length > 0 && keyword && (
          <AutoSearchContainer>
            <AutoSearchWrap ref={autoRef}>
              <>
              <Recommended>추천 검색어</Recommended>
              {keyItems.map((search, idx) => (
                <AutoSearchData
                  key={search.sickCd}
                  onClick={() => {
                    setKeyword(search.sickNm);
                  }}
                >
                    <SearchIcon />
                  <div>{search.sickNm}</div>
                </AutoSearchData>
              ))}
              </>
            </AutoSearchWrap>
          </AutoSearchContainer>
        )}
      </SearchContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display:flex;
  justify-content:center;
  text-align:center;
  background-color: #D0E8FD;
  height:100vh;
`
const InputWrapper = styled.section`
  display:flex;
  background-color:#ffffff;
  border-radius: 1rem;
  align-items:center;
`

const IconWrapper = styled.section`
    padding:0.7rem;
    border-radius: 1rem 0 0 1rem;
`
const BlueBox = styled.div`
  color: #ffffff;
  background-color:#367AE1;
  padding:0.7rem;
  border-radius: 0 1rem 1rem 0rem;
  min-width:3rem;
  border:1px solid #367AE1;
`

const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
`;

const Search = styled.input`
  border: 0;
  padding-left: 10px;
  width: 100%;
  height: 100%;
  outline: none;
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 400px;
  background-color: #fff;
  position: absolute;
  top: 180px;
  border-radius: 1rem;
  padding: 15px 0rem;
`;

const AutoSearchWrap = styled.ul`
  list-style:none;
`;

const AutoSearchData = styled.li`
  display:flex;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  /* border:1px solid red; */
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
`;

const Recommended =styled.div`
  font-size: 0.8rem;
  color: #B1B9C0;
  text-align:left;
`

export default App;
