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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { scrapeMP4, scrapeSearch, scrapeAnimeDetails, } from 'gogoanime-api/lib/anime_parser';
import { getAnimeTitle } from './api';
export function getAnimeSlug(title, episode) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var emptyData, slug, findAnime, gogoEpisodes, episodeSlug, subAnime, dubAnime, _b, sub, dub;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    emptyData = {
                        sub: {
                            Referer: '',
                            sources: [],
                        },
                        dub: {
                            Referer: '',
                            sources: [],
                        },
                        episodes: 0,
                    };
                    if (!title || title === '')
                        return [2 /*return*/, emptyData];
                    slug = title.replace(/[^0-9a-zA-Z]+/g, ' ');
                    return [4 /*yield*/, scrapeSearch({ keyw: slug })];
                case 1:
                    findAnime = (_c.sent());
                    if (findAnime.length === 0)
                        return [2 /*return*/, emptyData];
                    return [4 /*yield*/, scrapeAnimeDetails({ id: findAnime[0].animeId })];
                case 2:
                    gogoEpisodes = (_c.sent())
                        .episodesList;
                    episodeSlug = (_a = gogoEpisodes[0]) === null || _a === void 0 ? void 0 : _a.episodeId.split('-episode')[0];
                    subAnime = scrapeMP4({ id: "".concat(episodeSlug, "-episode-").concat(episode) });
                    dubAnime = scrapeMP4({
                        id: "".concat(episodeSlug.replace(/-movie$/, ''), "-dub-episode-").concat(episode),
                    });
                    return [4 /*yield*/, Promise.all([subAnime, dubAnime])];
                case 3:
                    _b = _c.sent(), sub = _b[0], dub = _b[1];
                    sub.sources = sub.sources || [];
                    sub.sources_bk = sub.sources_bk || [];
                    dub.sources = dub.sources || [];
                    dub.sources_bk = dub.sources_bk || [];
                    return [2 /*return*/, {
                            sub: {
                                Referer: sub.Referer,
                                sources: __spreadArray(__spreadArray([], sub.sources, true), sub.sources_bk, true),
                            },
                            dub: {
                                Referer: dub.Referer,
                                sources: __spreadArray(__spreadArray([], dub.sources, true), dub.sources_bk, true),
                            },
                            episodes: gogoEpisodes.length || null,
                        }];
            }
        });
    });
}
export function getAnime(id, episode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, english, romaji, romajiAnime, englishAnime, anime;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getAnimeTitle({ id: id })];
                case 1:
                    _a = (_b.sent()).Media.title, english = _a.english, romaji = _a.romaji;
                    // ensure both of them don't have null value
                    english = english || romaji;
                    romaji = romaji || english;
                    // lower case both the titles
                    english = english.toLocaleLowerCase();
                    romaji = romaji.toLocaleLowerCase();
                    // if the titles are same run this function once
                    if (english === romaji) {
                        return [2 /*return*/, getAnimeSlug(english, episode)];
                    }
                    romajiAnime = getAnimeSlug(romaji, episode);
                    englishAnime = getAnimeSlug(english, episode);
                    return [4 /*yield*/, Promise.all([englishAnime, romajiAnime]).then(function (r) {
                            return r[0].episodes > 0 ? r[0] : r[1];
                        })];
                case 2:
                    anime = _b.sent();
                    return [2 /*return*/, anime];
            }
        });
    });
}
//# sourceMappingURL=gogoanime.js.map