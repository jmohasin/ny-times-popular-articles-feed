import { Article } from './article';

export interface ArticleMeta {
    status: string;
    num_results: number;
    results: Article[];
}
