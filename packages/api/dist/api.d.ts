import { EpisodesListFragment } from './generated/kitsu';
export declare const indexPage: (variables?: import("./generated/aniList").Exact<{
    perPage?: number;
    page?: number;
    seasonYear?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").IndexPageQuery>, animePage: (variables?: import("./generated/aniList").Exact<{
    id?: number;
    perPage?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").AnimePageQuery>, getList: (variables?: import("./generated/aniList").Exact<{
    perPage?: number;
    page?: number;
    sort?: import("./generated/aniList").MediaSort | import("./generated/aniList").MediaSort[];
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetListQuery>, searchAnime: (variables?: import("./generated/aniList").Exact<{
    page?: number;
    perPage?: number;
    keyword?: string;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").SearchAnimeQuery>, getAnimeInfo: (variables?: import("./generated/aniList").Exact<{
    id?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetAnimeInfoQuery>, getPopularBanner: (variables?: import("./generated/aniList").Exact<{
    seasonYear?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetPopularBannerQuery>, getAnimeBanner: (variables?: import("./generated/aniList").Exact<{
    id?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetAnimeBannerQuery>, getAnimeTitle: (variables?: import("./generated/aniList").Exact<{
    id?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetAnimeTitleQuery>, searchGenre: (variables?: import("./generated/aniList").Exact<{
    page?: number;
    perPage?: number;
    genre?: string;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").SearchGenreQuery>, watchPage: (variables?: import("./generated/aniList").Exact<{
    id?: number;
    perPage?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").WatchPageQuery>, getAnimeByIds: (variables?: import("./generated/aniList").Exact<{
    perPage?: number;
    page?: number;
    ids?: number | number[];
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/aniList").GetAnimeByIdsQuery>;
export declare const getAnimesKitsu: (variables: import("./generated/kitsu").Exact<{
    first?: number;
    title: string;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/kitsu").GetAnimesKitsuQuery>, getEpisodeKitsu: (variables: import("./generated/kitsu").Exact<{
    id: string;
    first?: number;
}>, requestHeaders?: Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) => Promise<import("./generated/kitsu").GetEpisodeKitsuQuery>;
/**
 * @example 'naruto', startDate: '2019', season: 'WINTER'
 */
export declare const getKitsuEpisodes: (title: string | null, season: string, startDate: number) => Promise<EpisodesListFragment | null>;
//# sourceMappingURL=api.d.ts.map