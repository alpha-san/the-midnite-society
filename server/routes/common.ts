export let handleError = (res, reason, message, code) => {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

export let logSuccess = (document, method = null) => {
  console.log(`Success for ${method}, doc:`, document);
}

export const USERS_COLLECTION = "users";

export const ARTISTS_COLLECTION = "artists";
export const ALBUMS_COLLECTION = "albums";
export const TRACKS_COLLECTION = "tracks";

export const BLOGPOST_COLLECTION = "blogPosts";
