import { axiosInstance } from "./axiosInstance"

export const searchDesease = async(q?:string) => {
  const config = {
    params : {
      q
    }
  }
  const {data} = await axiosInstance.get('/sick', config)
  console.log(data)
}