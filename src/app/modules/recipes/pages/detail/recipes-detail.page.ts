import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {RecipeDetail} from '../../interface/item';
import {RecipesService} from '../../services/recipes.service';
import {RecipesItemRequestAction} from '../../store/actions';
import {selectRecipeDetail} from '../../store/selectors';

@Component({
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  private item$ = this.store.pipe(select(selectRecipeDetail), filter(Boolean));
  public item: RecipeDetail;
  public id = this.activatedRoute.snapshot.paramMap.get('id');
  public imageUrl = this.recipesService.getImageUrl();

  public constructor(
    private http: HttpClient,
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private store: Store<any>,
  ) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.item$.subscribe((data: RecipeDetail) => {
        this.item = data;
      })
    );

    this.load();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private load(): void {
    this.store.dispatch(new RecipesItemRequestAction(this.id));
  }

  public back(): void {
    this.location.back();
  }
}
