import {Action} from '@ngrx/store';
import {RecipeSearchError} from '../../interface/api';

export enum RecipesActionTypes {
  RECIPES_LIST_REQUEST = '[recipes] list request',
  RECIPES_LIST_ERROR = '[recipes] list error',
  RECIPES_LIST_SUCCESS = '[recipes] list success',
  RECIPES_ITEM_REQUEST = '[recipes] item request',
  RECIPES_ITEM_ERROR = '[recipes] item error',
  RECIPES_ITEM_SUCCESS = '[recipes] item success',
}

export class RecipesListRequestAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_LIST_REQUEST;

  constructor(public payload: string) {
  }
}

export class RecipesListErrorAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_LIST_ERROR;

  constructor(public payload: RecipeSearchError) {
  }
}

export class RecipesListSuccessAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_LIST_SUCCESS;

  constructor(public payload) {
  }
}

export class RecipesItemRequestAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_ITEM_REQUEST;

  constructor(public payload: string) {
  }
}

export class RecipesItemErrorAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_ITEM_ERROR;

  constructor(public payload) {
  }
}

export class RecipesItemSuccessAction implements Action {
  readonly type = RecipesActionTypes.RECIPES_ITEM_SUCCESS;

  constructor(public payload) {
  }
}

export type RecipesActionsUnion =
  | RecipesListRequestAction
  | RecipesListErrorAction
  | RecipesListSuccessAction
  | RecipesItemRequestAction
  | RecipesItemErrorAction
  | RecipesItemSuccessAction;
