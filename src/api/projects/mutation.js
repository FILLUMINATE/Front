import { useMutation, useQueryClient } from "react-query";
import { createProject } from "./api";

// 로그인 필요
export const useProjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((ProjectData) => createProject(ProjectData), {
    onSuccess: () => {
      alert("프로젝트 등록 성공");
      queryClient.invalidateQueries("projects");
    },
    onError: () => {
      alert("프로젝트 등록 실패");
    },
  });
};
