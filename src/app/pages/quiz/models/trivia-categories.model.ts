export interface TriviaCategory {
  id: number;
  name: string;
}

export interface TriviaCategoriResponse {
  trivia_categories: TriviaCategory[];
}
