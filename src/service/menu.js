import {request} from "./axios";

export function menuAll(){
  return request({
    url: '/menu/getAll'
  })
}

