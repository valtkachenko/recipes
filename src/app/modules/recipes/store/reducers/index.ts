import {combineReducers} from '@ngrx/store';
import {RecipesActionsUnion, RecipesActionTypes} from '../actions';

const list = (store = null, action: RecipesActionsUnion) => {
  switch (action.type) {
    case RecipesActionTypes.RECIPES_LIST_REQUEST:
    case RecipesActionTypes.RECIPES_LIST_ERROR:
      return null;
    case RecipesActionTypes.RECIPES_LIST_SUCCESS:
      return action.payload;
    default:
      return store;
  }
};

const item = (store = null, action: RecipesActionsUnion) => {
  switch (action.type) {
    case RecipesActionTypes.RECIPES_ITEM_REQUEST:
    case RecipesActionTypes.RECIPES_ITEM_ERROR:
      return null;
    case RecipesActionTypes.RECIPES_ITEM_SUCCESS:
      return action.payload;
    default:
      return store;
  }
};

const error = (store = null, action: RecipesActionsUnion) => {
  switch (action.type) {
    case RecipesActionTypes.RECIPES_LIST_ERROR:
    case RecipesActionTypes.RECIPES_ITEM_ERROR:
      return action.payload;
    case RecipesActionTypes.RECIPES_LIST_SUCCESS:
    case RecipesActionTypes.RECIPES_ITEM_SUCCESS:
      return null;
    default:
      return store;
  }
};

export const recipes = combineReducers({
  list,
  item,
  error,
});
