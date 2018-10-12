import { MediaMetaData } from './media-meta-data';
export interface Media {
    type: string;
    subtype: string;
    copyright: number;
    mediaMetadata: MediaMetaData[];
}
