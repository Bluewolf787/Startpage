import { Bookmark } from './bookmark';

/**
 * ```ts
 * id: number | null
 * name: string
 * bookmarks: Bookmark[]
 * ```
 */
export interface BookmarkCategory {
  id: number | null;
  name: string;
  bookmarks: Bookmark[];
}
