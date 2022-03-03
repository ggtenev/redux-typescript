import axios from "axios";
import {ActionType} from '../action-types/index'
import { Action } from "../actions";
import {Dispatch} from 'redux'

export const searchRepos = (term:string) => {
 return async (dispatch:Dispatch<Action>) => {
  dispatch({
   type:ActionType.SEARCH_REPOS
  })

  try {
   const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
    params:{
     text:term
    }
   })

  const names =  data.objects.map((item:any) => {
   return item.package.name
   })
   // console.log(names);
   
   dispatch({
    type:ActionType.SEARCH_REPOS_SUCCESS,
    payload:names
   })
  } catch (err:any) {
   dispatch({
    type:ActionType.SEARCH_REPOS_ERRORS,
    payload: err.message
   })
  }
 }
}