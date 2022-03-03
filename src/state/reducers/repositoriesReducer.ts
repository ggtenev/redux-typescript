import { Action} from '../actions/index'
import {ActionType} from '../action-types/index'

interface RepositoriesState {
 loading:boolean;
 error:string | null;
 data:string[];
}

const initState = {
 loading:false,
 error:null,
 data:[]
}


export const reducer = (state:RepositoriesState = initState,action:Action):RepositoriesState => {

 switch (action.type) {
  
 case ActionType.SEARCH_REPOS:
  return {loading:true,error:null,data:[]}
 
 case ActionType.SEARCH_REPOS_SUCCESS:
  return {loading:false,error:null,data:action.payload}

 case ActionType.SEARCH_REPOS_ERRORS:
  return {loading:false,error:action.payload,data:[]}


  default:
   return state
   
 }
}

export default reducer