import { instance } from "../instance/instance";

// 로그인 인증 필요
export const createFeed = async (FeedData) => {
  const { data } = await instance.post(`/api/board`, FeedData);
  return data;
};

export const getNotices = async () => {
  const { data } = await instance.get(`/api/board/notice`);
  return data;
};

export const getFeedById = async (id) => {
  const { data } = await instance.get(`/api/board/:${id}`);
  return data;
};

// 백엔드 미구현
export const getFeeds = async () => {
  const { data } = await instance.get(`/api/board`);
  return data;
};

export const getFeed = async (id) => {
  const { data } = await instance.get(`/api/board/${id}`);
  return data[0];
};

export const getImgPath = async (id) => {
  const { data } = await instance.get(`/api/board/img/${id}`);
  return data[0];
};

export const deleteFeed = async (FeedId) => {
  const { data } = await instance.delete(`/api/board/:${FeedId}`);
  return data;
};
