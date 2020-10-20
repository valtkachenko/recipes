import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {RecipeSearchResponse} from '../interface/list';
import {RecipeDetail} from '../interface/item';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {

  private apiUrl = 'https://api.spoonacular.com';
  private imageUrl = 'https://spoonacular.com/cdn/ingredients_100x100/';

  public constructor(
    private http: HttpClient,
  ) {
  }

  public search(search?: string): Observable<RecipeSearchResponse> {
    return this.http
      .get(`${this.apiUrl}/recipes/complexSearch?apiKey=${environment.apiKey}&query=${search}`) as Observable<RecipeSearchResponse>;
  }

  public info(id: string): Observable<RecipeDetail> {
    return this.http
      .get(`${this.apiUrl}/recipes/${id}/information?apiKey=${environment.apiKey}`) as Observable<RecipeDetail>;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }
}
