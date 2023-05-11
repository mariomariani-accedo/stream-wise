var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import gql from 'graphql-tag';
export var AgeRatingEnum;
(function (AgeRatingEnum) {
    /** Acceptable for all ages */
    AgeRatingEnum["G"] = "G";
    /** Parental guidance suggested; should be safe for preteens and older */
    AgeRatingEnum["Pg"] = "PG";
    /** Possible lewd or intense themes; should be safe for teens and older */
    AgeRatingEnum["R"] = "R";
    /** Contains adult content or themes; should only be viewed by adults */
    AgeRatingEnum["R18"] = "R18";
})(AgeRatingEnum || (AgeRatingEnum = {}));
export var AnimeSubtypeEnum;
(function (AnimeSubtypeEnum) {
    AnimeSubtypeEnum["Movie"] = "MOVIE";
    AnimeSubtypeEnum["Music"] = "MUSIC";
    /** Original Net Animation (Web Anime). */
    AnimeSubtypeEnum["Ona"] = "ONA";
    /** Original Video Animation. Anime directly released to video market. */
    AnimeSubtypeEnum["Ova"] = "OVA";
    /** Spinoffs or Extras of the original. */
    AnimeSubtypeEnum["Special"] = "SPECIAL";
    AnimeSubtypeEnum["Tv"] = "TV";
})(AnimeSubtypeEnum || (AnimeSubtypeEnum = {}));
export var CharacterRoleEnum;
(function (CharacterRoleEnum) {
    /** A background character who generally only appears in a few episodes */
    CharacterRoleEnum["Background"] = "BACKGROUND";
    /** A character from a different franchise making a (usually brief) appearance */
    CharacterRoleEnum["Cameo"] = "CAMEO";
    /** A character who appears throughout a series and is a focal point of the media */
    CharacterRoleEnum["Main"] = "MAIN";
    /** A character who appears in multiple episodes but is not a main character */
    CharacterRoleEnum["Recurring"] = "RECURRING";
})(CharacterRoleEnum || (CharacterRoleEnum = {}));
export var CharacterVoiceSortEnum;
(function (CharacterVoiceSortEnum) {
    CharacterVoiceSortEnum["CreatedAt"] = "CREATED_AT";
    CharacterVoiceSortEnum["UpdatedAt"] = "UPDATED_AT";
})(CharacterVoiceSortEnum || (CharacterVoiceSortEnum = {}));
export var CommentLikeSortEnum;
(function (CommentLikeSortEnum) {
    CommentLikeSortEnum["CreatedAt"] = "CREATED_AT";
    CommentLikeSortEnum["Following"] = "FOLLOWING";
})(CommentLikeSortEnum || (CommentLikeSortEnum = {}));
export var CommentSortEnum;
(function (CommentSortEnum) {
    CommentSortEnum["CreatedAt"] = "CREATED_AT";
    CommentSortEnum["Following"] = "FOLLOWING";
    CommentSortEnum["LikesCount"] = "LIKES_COUNT";
})(CommentSortEnum || (CommentSortEnum = {}));
export var EpisodeSortEnum;
(function (EpisodeSortEnum) {
    EpisodeSortEnum["CreatedAt"] = "CREATED_AT";
    EpisodeSortEnum["Number"] = "NUMBER";
    EpisodeSortEnum["UpdatedAt"] = "UPDATED_AT";
})(EpisodeSortEnum || (EpisodeSortEnum = {}));
export var ExternalIdentityProviderEnum;
(function (ExternalIdentityProviderEnum) {
    /** Facebook identity */
    ExternalIdentityProviderEnum["Facebook"] = "FACEBOOK";
})(ExternalIdentityProviderEnum || (ExternalIdentityProviderEnum = {}));
export var FollowSortEnum;
(function (FollowSortEnum) {
    FollowSortEnum["CreatedAt"] = "CREATED_AT";
    FollowSortEnum["FollowingFollowed"] = "FOLLOWING_FOLLOWED";
    FollowSortEnum["FollowingFollower"] = "FOLLOWING_FOLLOWER";
})(FollowSortEnum || (FollowSortEnum = {}));
export var InstallmentSortEnum;
(function (InstallmentSortEnum) {
    InstallmentSortEnum["AlternativeOrder"] = "ALTERNATIVE_ORDER";
    InstallmentSortEnum["ReleaseOrder"] = "RELEASE_ORDER";
})(InstallmentSortEnum || (InstallmentSortEnum = {}));
export var InstallmentTagEnum;
(function (InstallmentTagEnum) {
    /** Same universe/world/reality/timeline, completely different characters. */
    InstallmentTagEnum["AlternateSetting"] = "ALTERNATE_SETTING";
    /** Same setting, same characters, story is told differently. */
    InstallmentTagEnum["AlternateVersion"] = "ALTERNATE_VERSION";
    /** Characters from different media meet in the same story. */
    InstallmentTagEnum["Crossover"] = "CROSSOVER";
    /** The main story. */
    InstallmentTagEnum["MainStory"] = "MAIN_STORY";
    /** Takes place sometime during the main storyline. */
    InstallmentTagEnum["SideStory"] = "SIDE_STORY";
    /** Uses characters of a different series, but is not an alternate setting or story. */
    InstallmentTagEnum["Spinoff"] = "SPINOFF";
})(InstallmentTagEnum || (InstallmentTagEnum = {}));
export var LibraryEntryStatusEnum;
(function (LibraryEntryStatusEnum) {
    /** The user completed this media. */
    LibraryEntryStatusEnum["Completed"] = "COMPLETED";
    /** The user is currently reading or watching this media. */
    LibraryEntryStatusEnum["Current"] = "CURRENT";
    /** The user started but chose not to finish this media. */
    LibraryEntryStatusEnum["Dropped"] = "DROPPED";
    /** The user started but paused reading or watching this media. */
    LibraryEntryStatusEnum["OnHold"] = "ON_HOLD";
    /** The user plans to read or watch this media in future. */
    LibraryEntryStatusEnum["Planned"] = "PLANNED";
})(LibraryEntryStatusEnum || (LibraryEntryStatusEnum = {}));
export var LibraryEventKindEnum;
(function (LibraryEventKindEnum) {
    /** Notes were added/updated. */
    LibraryEventKindEnum["Annotated"] = "ANNOTATED";
    /** Progress or Time Spent was added/updated. */
    LibraryEventKindEnum["Progressed"] = "PROGRESSED";
    /** Rating was added/updated. */
    LibraryEventKindEnum["Rated"] = "RATED";
    /** Reaction was added/updated. */
    LibraryEventKindEnum["Reacted"] = "REACTED";
    /** Status or Reconsuming was added/updated. */
    LibraryEventKindEnum["Updated"] = "UPDATED";
})(LibraryEventKindEnum || (LibraryEventKindEnum = {}));
export var LibraryEventSortEnum;
(function (LibraryEventSortEnum) {
    LibraryEventSortEnum["CreatedAt"] = "CREATED_AT";
    LibraryEventSortEnum["UpdatedAt"] = "UPDATED_AT";
})(LibraryEventSortEnum || (LibraryEventSortEnum = {}));
export var LockedReasonEnum;
(function (LockedReasonEnum) {
    LockedReasonEnum["Closed"] = "CLOSED";
    LockedReasonEnum["Spam"] = "SPAM";
    LockedReasonEnum["TooHeated"] = "TOO_HEATED";
})(LockedReasonEnum || (LockedReasonEnum = {}));
export var MangaSubtypeEnum;
(function (MangaSubtypeEnum) {
    /** Self published work. */
    MangaSubtypeEnum["Doujin"] = "DOUJIN";
    MangaSubtypeEnum["Manga"] = "MANGA";
    /** Chinese comics produced in China and in the Greater China region. */
    MangaSubtypeEnum["Manhua"] = "MANHUA";
    /** A style of South Korean comic books and graphic novels */
    MangaSubtypeEnum["Manhwa"] = "MANHWA";
    MangaSubtypeEnum["Novel"] = "NOVEL";
    /** Original English Language. */
    MangaSubtypeEnum["Oel"] = "OEL";
    MangaSubtypeEnum["Oneshot"] = "ONESHOT";
})(MangaSubtypeEnum || (MangaSubtypeEnum = {}));
export var MappingExternalSiteEnum;
(function (MappingExternalSiteEnum) {
    MappingExternalSiteEnum["Anidb"] = "ANIDB";
    MappingExternalSiteEnum["AnilistAnime"] = "ANILIST_ANIME";
    MappingExternalSiteEnum["AnilistManga"] = "ANILIST_MANGA";
    MappingExternalSiteEnum["Animenewsnetwork"] = "ANIMENEWSNETWORK";
    MappingExternalSiteEnum["Aozora"] = "AOZORA";
    MappingExternalSiteEnum["Hulu"] = "HULU";
    MappingExternalSiteEnum["ImdbEpisodes"] = "IMDB_EPISODES";
    MappingExternalSiteEnum["Mangaupdates"] = "MANGAUPDATES";
    MappingExternalSiteEnum["MyanimelistAnime"] = "MYANIMELIST_ANIME";
    MappingExternalSiteEnum["MyanimelistCharacters"] = "MYANIMELIST_CHARACTERS";
    MappingExternalSiteEnum["MyanimelistManga"] = "MYANIMELIST_MANGA";
    MappingExternalSiteEnum["MyanimelistPeople"] = "MYANIMELIST_PEOPLE";
    MappingExternalSiteEnum["MyanimelistProducers"] = "MYANIMELIST_PRODUCERS";
    MappingExternalSiteEnum["Mydramalist"] = "MYDRAMALIST";
    MappingExternalSiteEnum["Thetvdb"] = "THETVDB";
    MappingExternalSiteEnum["ThetvdbSeason"] = "THETVDB_SEASON";
    MappingExternalSiteEnum["ThetvdbSeries"] = "THETVDB_SERIES";
    MappingExternalSiteEnum["Trakt"] = "TRAKT";
})(MappingExternalSiteEnum || (MappingExternalSiteEnum = {}));
export var MappingItemEnum;
(function (MappingItemEnum) {
    MappingItemEnum["Anime"] = "ANIME";
    MappingItemEnum["Category"] = "CATEGORY";
    MappingItemEnum["Character"] = "CHARACTER";
    MappingItemEnum["Episode"] = "EPISODE";
    MappingItemEnum["Manga"] = "MANGA";
    MappingItemEnum["Person"] = "PERSON";
    MappingItemEnum["Producer"] = "PRODUCER";
})(MappingItemEnum || (MappingItemEnum = {}));
export var MediaCategorySortEnum;
(function (MediaCategorySortEnum) {
    MediaCategorySortEnum["Ancestry"] = "ANCESTRY";
    MediaCategorySortEnum["CreatedAt"] = "CREATED_AT";
})(MediaCategorySortEnum || (MediaCategorySortEnum = {}));
export var MediaCharacterSortEnum;
(function (MediaCharacterSortEnum) {
    MediaCharacterSortEnum["CreatedAt"] = "CREATED_AT";
    MediaCharacterSortEnum["Role"] = "ROLE";
    MediaCharacterSortEnum["UpdatedAt"] = "UPDATED_AT";
})(MediaCharacterSortEnum || (MediaCharacterSortEnum = {}));
export var MediaProductionRoleEnum;
(function (MediaProductionRoleEnum) {
    MediaProductionRoleEnum["Licensor"] = "LICENSOR";
    MediaProductionRoleEnum["Producer"] = "PRODUCER";
    MediaProductionRoleEnum["Serialization"] = "SERIALIZATION";
    MediaProductionRoleEnum["Studio"] = "STUDIO";
})(MediaProductionRoleEnum || (MediaProductionRoleEnum = {}));
export var MediaReactionSortEnum;
(function (MediaReactionSortEnum) {
    MediaReactionSortEnum["CreatedAt"] = "CREATED_AT";
    MediaReactionSortEnum["UpdatedAt"] = "UPDATED_AT";
    MediaReactionSortEnum["UpVotesCount"] = "UP_VOTES_COUNT";
})(MediaReactionSortEnum || (MediaReactionSortEnum = {}));
export var MediaReactionVoteSortEnum;
(function (MediaReactionVoteSortEnum) {
    MediaReactionVoteSortEnum["CreatedAt"] = "CREATED_AT";
    MediaReactionVoteSortEnum["Following"] = "FOLLOWING";
})(MediaReactionVoteSortEnum || (MediaReactionVoteSortEnum = {}));
/** これはアニメやマンガです */
export var MediaTypeEnum;
(function (MediaTypeEnum) {
    MediaTypeEnum["Anime"] = "ANIME";
    MediaTypeEnum["Manga"] = "MANGA";
})(MediaTypeEnum || (MediaTypeEnum = {}));
export var PostLikeSortEnum;
(function (PostLikeSortEnum) {
    PostLikeSortEnum["CreatedAt"] = "CREATED_AT";
    PostLikeSortEnum["Following"] = "FOLLOWING";
})(PostLikeSortEnum || (PostLikeSortEnum = {}));
export var PostSortEnum;
(function (PostSortEnum) {
    PostSortEnum["CreatedAt"] = "CREATED_AT";
})(PostSortEnum || (PostSortEnum = {}));
export var ProTierEnum;
(function (ProTierEnum) {
    /**
     * Aozora Pro (only hides ads)
     * @deprecated No longer for sale
     */
    ProTierEnum["AoPro"] = "AO_PRO";
    /**
     * Aozora Pro+ (only hides ads)
     * @deprecated No longer for sale
     */
    ProTierEnum["AoProPlus"] = "AO_PRO_PLUS";
    /** Top tier of Kitsu Pro */
    ProTierEnum["Patron"] = "PATRON";
    /** Basic tier of Kitsu Pro */
    ProTierEnum["Pro"] = "PRO";
})(ProTierEnum || (ProTierEnum = {}));
export var RatingSystemEnum;
(function (RatingSystemEnum) {
    /** 1-20 in increments of 1 displayed as 1-10 in 0.5 increments */
    RatingSystemEnum["Advanced"] = "ADVANCED";
    /** 1-20 in increments of 2 displayed as 5 stars in 0.5 star increments */
    RatingSystemEnum["Regular"] = "REGULAR";
    /** 1-20 displayed as 4 smileys - Awful (1), Meh (8), Good (14) and Great (20) */
    RatingSystemEnum["Simple"] = "SIMPLE";
})(RatingSystemEnum || (RatingSystemEnum = {}));
export var RecurringBillingServiceEnum;
(function (RecurringBillingServiceEnum) {
    /** Billed through Apple In-App Subscription */
    RecurringBillingServiceEnum["Apple"] = "APPLE";
    /** Billed through Google Play Subscription */
    RecurringBillingServiceEnum["GooglePlay"] = "GOOGLE_PLAY";
    /** Bill a PayPal account */
    RecurringBillingServiceEnum["Paypal"] = "PAYPAL";
    /** Bill a credit card via Stripe */
    RecurringBillingServiceEnum["Stripe"] = "STRIPE";
})(RecurringBillingServiceEnum || (RecurringBillingServiceEnum = {}));
export var ReleaseSeasonEnum;
(function (ReleaseSeasonEnum) {
    /** Released during the Fall season */
    ReleaseSeasonEnum["Fall"] = "FALL";
    /** Released during the Spring season */
    ReleaseSeasonEnum["Spring"] = "SPRING";
    /** Released during the Summer season */
    ReleaseSeasonEnum["Summer"] = "SUMMER";
    /** Released during the Winter season */
    ReleaseSeasonEnum["Winter"] = "WINTER";
})(ReleaseSeasonEnum || (ReleaseSeasonEnum = {}));
export var ReleaseStatusEnum;
(function (ReleaseStatusEnum) {
    /** This media is currently releasing */
    ReleaseStatusEnum["Current"] = "CURRENT";
    /** This media is no longer releasing */
    ReleaseStatusEnum["Finished"] = "FINISHED";
    /** The release date has not been announced yet */
    ReleaseStatusEnum["Tba"] = "TBA";
    /** This media is not released yet */
    ReleaseStatusEnum["Unreleased"] = "UNRELEASED";
    /** This media is releasing soon */
    ReleaseStatusEnum["Upcoming"] = "UPCOMING";
})(ReleaseStatusEnum || (ReleaseStatusEnum = {}));
export var ReportReasonEnum;
(function (ReportReasonEnum) {
    /** No bulli! */
    ReportReasonEnum["Bullying"] = "BULLYING";
    /** Not Safe For Work */
    ReportReasonEnum["Nsfw"] = "NSFW";
    ReportReasonEnum["Offensive"] = "OFFENSIVE";
    ReportReasonEnum["Other"] = "OTHER";
    ReportReasonEnum["Spam"] = "SPAM";
    ReportReasonEnum["Spoiler"] = "SPOILER";
})(ReportReasonEnum || (ReportReasonEnum = {}));
export var ReportStatusEnum;
(function (ReportStatusEnum) {
    ReportStatusEnum["Declined"] = "DECLINED";
    ReportStatusEnum["Reported"] = "REPORTED";
    ReportStatusEnum["Resolved"] = "RESOLVED";
})(ReportStatusEnum || (ReportStatusEnum = {}));
export var SitePermissionEnum;
(function (SitePermissionEnum) {
    /** Administrator/staff member of Kitsu */
    SitePermissionEnum["Admin"] = "ADMIN";
    /** Moderator of community behavior */
    SitePermissionEnum["CommunityMod"] = "COMMUNITY_MOD";
    /** Maintainer of the Kitsu media database */
    SitePermissionEnum["DatabaseMod"] = "DATABASE_MOD";
})(SitePermissionEnum || (SitePermissionEnum = {}));
export var SortDirection;
(function (SortDirection) {
    SortDirection["Ascending"] = "ASCENDING";
    SortDirection["Descending"] = "DESCENDING";
})(SortDirection || (SortDirection = {}));
export var TitleLanguagePreferenceEnum;
(function (TitleLanguagePreferenceEnum) {
    /** Prefer the most commonly-used title for media */
    TitleLanguagePreferenceEnum["Canonical"] = "CANONICAL";
    /** Prefer the localized title for media */
    TitleLanguagePreferenceEnum["Localized"] = "LOCALIZED";
    /** Prefer the romanized title for media */
    TitleLanguagePreferenceEnum["Romanized"] = "ROMANIZED";
})(TitleLanguagePreferenceEnum || (TitleLanguagePreferenceEnum = {}));
export var WikiSubmissionSortEnum;
(function (WikiSubmissionSortEnum) {
    WikiSubmissionSortEnum["CreatedAt"] = "CREATED_AT";
    WikiSubmissionSortEnum["UpdatedAt"] = "UPDATED_AT";
})(WikiSubmissionSortEnum || (WikiSubmissionSortEnum = {}));
export var WikiSubmissionStatusEnum;
(function (WikiSubmissionStatusEnum) {
    WikiSubmissionStatusEnum["Approved"] = "APPROVED";
    WikiSubmissionStatusEnum["Draft"] = "DRAFT";
    WikiSubmissionStatusEnum["Pending"] = "PENDING";
    WikiSubmissionStatusEnum["Rejected"] = "REJECTED";
})(WikiSubmissionStatusEnum || (WikiSubmissionStatusEnum = {}));
export var EpisodeInfoFragmentDoc = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment EpisodeInfo on Episode {\n  number\n  titles {\n    canonical\n  }\n  thumbnail {\n    original {\n      url\n    }\n  }\n}\n    "], ["\n    fragment EpisodeInfo on Episode {\n  number\n  titles {\n    canonical\n  }\n  thumbnail {\n    original {\n      url\n    }\n  }\n}\n    "])));
export var EpisodesListFragmentDoc = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    fragment EpisodesList on Anime {\n  episodeCount\n  episodes(first: $first) {\n    nodes {\n      ...EpisodeInfo\n    }\n  }\n}\n    ", ""], ["\n    fragment EpisodesList on Anime {\n  episodeCount\n  episodes(first: $first) {\n    nodes {\n      ...EpisodeInfo\n    }\n  }\n}\n    ", ""])), EpisodeInfoFragmentDoc);
export var GetAnimesKitsuDocument = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query getAnimesKitsu($first: Int, $title: String!) {\n  searchAnimeByTitle(title: $title, first: 5) {\n    animes: nodes {\n      id\n      season\n      startDate\n      ...EpisodesList\n    }\n  }\n}\n    ", ""], ["\n    query getAnimesKitsu($first: Int, $title: String!) {\n  searchAnimeByTitle(title: $title, first: 5) {\n    animes: nodes {\n      id\n      season\n      startDate\n      ...EpisodesList\n    }\n  }\n}\n    ", ""])), EpisodesListFragmentDoc);
export var GetEpisodeKitsuDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query getEpisodeKitsu($id: ID!, $first: Int) {\n  findAnimeById(id: $id) {\n    ...EpisodesList\n  }\n}\n    ", ""], ["\n    query getEpisodeKitsu($id: ID!, $first: Int) {\n  findAnimeById(id: $id) {\n    ...EpisodesList\n  }\n}\n    ", ""])), EpisodesListFragmentDoc);
var defaultWrapper = function (action, _operationName, _operationType) { return action(); };
export function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        getAnimesKitsu: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(GetAnimesKitsuDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'getAnimesKitsu', 'query');
        },
        getEpisodeKitsu: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) { return client.request(GetEpisodeKitsuDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders)); }, 'getEpisodeKitsu', 'query');
        }
    };
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=kitsu.js.map