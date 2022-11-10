import { AxiosResponse } from 'axios';
import { sick } from './type';

export interface SearchInterface {
  getSick: (inputValue: string) => Promise<AxiosResponse<sick>>;
}
