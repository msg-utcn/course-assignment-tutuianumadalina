export enum QuestionsTopic {
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
}
export interface QuestionsModel {
  id?: string;
  title?: string;

  postedBy?: string;

  content?: string;
  topic?: string;
  rating?: number;
  creationDate?: string;
}
