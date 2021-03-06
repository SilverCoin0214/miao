import request from "./request";

export function getTopbanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/album/newest",
    params: {
      limit,
    },
  });
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  });
}

export function getArtistList(offset, limit) {
  return request({
    url: "/top/artists",
    params: {
      offset,
      limit,
    },
  });
}
