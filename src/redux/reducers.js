import {combineReducers} from 'redux';
import { authentication } from './User/reducer'
import {alert} from './Alert/reducer'
import {registration} from './User/register-reducer'
import {users} from './User/user-reducer'
import ProductReducer from './Product/reducer'
export const rootReducer = combineReducers({
  authentication,
  alert,
  registration,
  users,
  ProductReducer
})