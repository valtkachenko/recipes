import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {HttpError} from '../../../../components/interface/api';
import {RecipeSearchError} from '../../interface/api';
import {RecipeItemError} from '../../interface/item';
import {
  RecipesActionTypes,
  RecipesItemErrorAction,
  RecipesItemRequestAction,
  RecipesItemSuccessAction,
  RecipesListErrorAction,
  RecipesListRequestAction,
  RecipesListSuccessAction,
} from '../actions';
import {RecipesService} from '../../services/recipes.service';

@Injectable()
export class RecipesEffects {

  protected list$ = createEffect(() => this.actions$.pipe(
    ofType<RecipesListRequestAction>(RecipesActionTypes.RECIPES_LIST_REQUEST),
    exhaustMap((action: RecipesListRequestAction) => this.recipesService.search(action.payload).pipe(
      map((response: any) =>
        new RecipesListSuccessAction(response),
      ),
      catchError((response: HttpError<RecipeSearchError>) =>
        of(new RecipesListErrorAction(response.error)),
      ),
    )),
  ));

  protected item$ = createEffect(() => this.actions$.pipe(
    ofType<RecipesItemRequestAction>(RecipesActionTypes.RECIPES_ITEM_REQUEST),
    exhaustMap((action: RecipesItemRequestAction) => this.recipesService.info(action.payload).pipe(
      map((response: any) =>
        new RecipesItemSuccessAction(response),
      ),
      catchError((response: HttpError<RecipeItemError>) =>
        of(new RecipesItemErrorAction(response.error)),
      ),
    )),
  ));

  public constructor(
    protected actions$: Actions,
    protected recipesService: RecipesService,
  ) {
  }
}
