import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from '../../material.module';
import {RecipesDetailPage} from './pages/detail/recipes-detail.page';
import {RecipesListPage} from './pages/list/recipes-list.page';
import {RecipesService} from './services/recipes.service';
import {RecipesEffects} from './store/effects';
import {recipes} from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecipesListPage,
      },
      {
        path: ':id',
        component: RecipesDetailPage,
      },
    ]),
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forFeature('recipes', recipes),
    EffectsModule.forFeature([RecipesEffects]),
  ],
  declarations: [
    RecipesListPage,
    RecipesDetailPage,
  ],
  providers: [
    RecipesService,
  ],
})
export class RecipesModule {
}
