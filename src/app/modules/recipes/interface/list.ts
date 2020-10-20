export interface RecipeSearchResponse {
  number: number;
  offset: number;
  results: Array<RecipeItemSearch>;
  totalResults: number;
}

export interface RecipeItemSearch {
  id: number;
  calories: number;
  carbs: string;
  fat: string;
  image: string;
  imageType: string;
  protein: string;
  title: string;
}
