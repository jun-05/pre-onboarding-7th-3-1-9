export interface autoDatas {
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
  setKeyword: any;
}

export interface IProps {
  keyItems: autoDatas[];
  selectIndex: number;
  setKeyword: any;
}