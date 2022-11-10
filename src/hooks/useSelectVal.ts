import { useState, useCallback } from 'react';
import { sick } from '../models/type';

export function useSelectVal() {
  const [selected, setSelected] = useState('');
  const [selectNum, setSelectNum] = useState(0)
  const handleSelected = (value: string ,idx?:number ) => {
    setSelected(value);
    if(idx !==undefined){
      setSelectNum(idx+1)
    }
  };

  const initValue = useCallback(()=>{
    setSelected('')
    setSelectNum(0)
  },[])


  const upDownValHandle=(typing:string,sickData:sick[])=>{
    switch (typing) {
      case "ArrowDown":
        if (sickData.length <= selectNum) {
          setSelectNum(1);
          const selectData = sickData[0];
          handleSelected(selectData?.sickNm);
        } else {
          setSelectNum(prev => ++prev);
          const selectData = sickData[selectNum];
          handleSelected(selectData?.sickNm);
        }
        break;
        case "ArrowUp":
            if (selectNum <= 1) {
              setSelectNum(sickData.length);
              const selectData = sickData[sickData.length - 1];
              handleSelected(selectData?.sickNm);
            } else {
              setSelectNum(prev => --prev);
              const selectData = sickData[selectNum - 2];
              handleSelected(selectData?.sickNm);
            }
          break;
      default:
        break;
    }
  }


  return { selected, handleSelected ,selectNum,setSelectNum,initValue,upDownValHandle};
}
