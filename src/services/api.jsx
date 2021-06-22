import axios from 'axios';
import { apiURL } from '@/constants/configs'

const api = axios.create({ baseURL: apiURL })

const base = async args => {
  try {
    const r = await api({ ...args })
    //console.log(r)
    return r
  } catch (err) {
    console.log(err.response)
    return err.response.status
  }
}

export const login = data => base({ url: data })
export const repositories = data => base({ url: `${data}/repos` })
export const followers = data => base({ url: `${data}/followers` })

