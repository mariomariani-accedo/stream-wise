var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
import { ClientError, GraphQLClient } from 'graphql-request';
import { aniListEndpoint, kitsuEndpoint } from './constants';
import { getSdk as aniSdk } from './generated/aniList';
import { getSdk as kitsuSdk, } from './generated/kitsu';
var aniListClient = new GraphQLClient(aniListEndpoint, {
    headers: {},
});
var kitsuClient = new GraphQLClient(kitsuEndpoint, {
    headers: {},
});
export var indexPage = (_a = aniSdk(aniListClient), _a.indexPage), animePage = _a.animePage, getList = _a.getList, searchAnime = _a.searchAnime, getAnimeInfo = _a.getAnimeInfo, getPopularBanner = _a.getPopularBanner, getAnimeBanner = _a.getAnimeBanner, getAnimeTitle = _a.getAnimeTitle, searchGenre = _a.searchGenre, watchPage = _a.watchPage, getAnimeByIds = _a.getAnimeByIds;
// kitsu middleware to ignore error fields
var kitsuMiddleware = function (action) { return __awaiter(void 0, void 0, void 0, function () {
    var result, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = {};
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, action()];
            case 2:
                result = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                if (!(err_1 instanceof ClientError))
                    throw err_1;
                result = err_1.response.data;
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
        }
    });
}); };
export var getAnimesKitsu = (_b = kitsuSdk(kitsuClient, kitsuMiddleware), _b.getAnimesKitsu), getEpisodeKitsu = _b.getEpisodeKitsu;
/**
 * @example 'naruto', startDate: '2019', season: 'WINTER'
 */
export var getKitsuEpisodes = function (title, season, startDate) { return __awaiter(void 0, void 0, void 0, function () {
    var kitsuAnimes, kitsuAnime;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!title) {
                    return [2 /*return*/, {
                            episodeCount: 0,
                            episodes: {
                                nodes: [],
                            },
                        }];
                }
                return [4 /*yield*/, getAnimesKitsu({
                        title: title,
                        first: 8,
                    })];
            case 1:
                kitsuAnimes = _a.sent();
                kitsuAnime = kitsuAnimes.searchAnimeByTitle.animes.filter(function (r) {
                    // return if the anime doesn't exists
                    if (!r)
                        return false;
                    // return false if the startDate doesn't exist
                    if (!r.startDate)
                        return false;
                    // only return false if the season exists and doesn't
                    // match with the kitsu one
                    if (r.season !== season && season)
                        return false;
                    return r.startDate.trim().split('-')[0] === startDate.toString();
                })[0];
                if (kitsuAnime === undefined) {
                    kitsuAnime = {
                        id: '-1',
                        episodeCount: 0,
                        episodes: {
                            nodes: [],
                        },
                    };
                }
                if (kitsuAnime.episodeCount === null) {
                    kitsuAnime.episodeCount = kitsuAnime.episodes.nodes.length;
                }
                return [2 /*return*/, kitsuAnime];
        }
    });
}); };
//# sourceMappingURL=api.js.map