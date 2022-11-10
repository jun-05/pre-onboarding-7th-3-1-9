import {Dispatch, SetStateAction} from 'react'

export interface IAutoDatas {
  sickCd: string;
  sickNm: string;
}
export interface ITitle {
  topContent: string,
  bottomContent: string
}

export interface IAutoSearchData {
  key: string;
  selectIndex: number;
  index: number
  name: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

export interface IProps {
  keyItems: IAutoDatas[];
  selectIndex: number;
  setKeyword: Dispatch<SetStateAction<string>>;
}


export interface ISearch{
  keyword : string;
  onChangeData: any;
  onKeyUp : any;
}