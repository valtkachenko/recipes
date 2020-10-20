import {HttpClient} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {RecipeSearchResponse} from '../../interface/list';
import {RecipeItemSearch} from '../../interface/list';
import {RecipesService} from '../../services/recipes.service';
import {RecipesListRequestAction} from '../../store/actions';
import {selectRecipesList} from '../../store/selectors';

@Component({
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  private items$ = this.store.pipe(select(selectRecipesList), filter(Boolean));
  public list: Array<RecipeItemSearch> = [];
  public value = '';

  public constructor(
    private http: HttpClient,
    private recipesService: RecipesService,
    private store: Store<any>,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.items$.subscribe((data: RecipeSearchResponse) => {
        this.list = data.results;
      }),
    );

    this.load();
  }

  public load(): void {
    this.store.dispatch(new RecipesListRequestAction(this.value));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public trackId(index: number, item: RecipeItemSearch): number {
    return item.id;
  }

  public onSearch(): void {
    this.load();
  }

  public onClear(): void {
    this.value = '';
    this.load();
  }
}
