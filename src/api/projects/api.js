import { instance } from "../instance/instance";

// 로그인 필요
export const createProject = async (ProjectData) => {
  const { data } = await instance.post(`/api/board`, ProjectData);
  return data;
};

export const getProjects = async () => {
  const { data } = await instance.get(`/api/board`);
  return data;
};

export const getProjectById = async (id) => {
  const { data } = await instance.get(`/api/board/:${id}`);
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await instance.delete(`/api/board/:${id}`);
  return data;
};
