export interface RecipeItemError {
  status: string;
  code: number;
  message: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions?: (null)[] | null;
  cheap: boolean;
  creditsText: string;
  cuisines?: Array<string> | null;
  dairyFree: boolean;
  diets?: Array<string> | null;
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions?: (null)[] | null;
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  summary: string;
  extendedIngredients: Array<RecipeIngredient>;
}

export interface RecipeIngredient {
  aisle: string;
  amount: number;
  consistency: string;
  id: number;
  image: string;
  // measures: {us: {amount: 2, unitShort: "cups", unitLong: "cups"},…}
  meta: Array<string>;
  metaInformation: Array<string>;
  name: string;
  original: string;
  originalName: string;
  originalString: string;
  unit: string;
}
