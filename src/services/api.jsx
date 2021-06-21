import axios from 'axios';
import { apiURL } from '@/constants/configs'

const api = axios.create({baseURL: apiURL})

const base = async args => {
  try {
  const r = await api({...args})
  console.log(r)
  }catch(err){
    console.log(err.message)
  }
}

export const login = data => base({url: data})
