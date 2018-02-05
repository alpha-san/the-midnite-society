"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = function (res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
};
exports.logSuccess = function (document, method) {
    if (method === void 0) { method = null; }
    console.log("Success for " + method + ", doc:", document);
};
exports.USERS_COLLECTION = "users";
exports.ARTISTS_COLLECTION = "artists";
exports.ALBUMS_COLLECTION = "albums";
exports.TRACKS_COLLECTION = "tracks";
exports.BLOGPOST_COLLECTION = "blogPosts";
//# sourceMappingURL=common.js.map