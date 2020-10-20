import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectRecipesState = createFeatureSelector('recipes');

export const selectRecipesList = createSelector(selectRecipesState, (state: any) => state.list);
export const selectRecipeDetail = createSelector(selectRecipesState, (state: any) => state.item);
