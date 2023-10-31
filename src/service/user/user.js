import {request} from "../axios";

export function hello(){
  return request({
    url: '/hello'
  })
}

