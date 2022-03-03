import {ActionType} from '../action-types/index'


interface searchRepoAction {
 type:ActionType.SEARCH_REPOS
}
interface searchRepoSuccessAction {
 type:ActionType.SEARCH_REPOS_SUCCESS,
 payload:string[]
}
interface searchRepoErrorAction {
 type:ActionType.SEARCH_REPOS_ERRORS,
 payload:string;
}

export type Action =  
  searchRepoAction
| searchRepoErrorAction
| searchRepoSuccessAction;
