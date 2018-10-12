import { Media } from './media';

export interface Article {
    id: number;
    title: string;
    byline: string;
    abstract: string;
    url: string;
    source: string;
    section: string;
    type: string;
    media: Media[];
    published_date: Date;
    views: number;
}
