import React from 'react';
import { useAppSelector } from 'redux/reducer/hooks';

function RecommendWords() {
  const { searchData } = useAppSelector(state => state.searchData);
  console.log(searchData);
  return <div>RecommendWords</div>;
}

export default RecommendWords;
