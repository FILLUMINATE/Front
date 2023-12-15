import { useMutation, useQueryClient } from "react-query";
import { createFeed } from "./api";

// 로그인 필요
export const useFeedMutation = (FeedData) => {
  const queryClient = useQueryClient();
  return useMutation(() => createFeed(FeedData), {
    onSuccess: () => {
      alert("피드 등록 성공");
      queryClient.invalidateQueries("Feeds");
    },
    onError: () => {
      alert("피드 등록 실패");
    },
  });
};

// 백엔드 미구현
// export const useDeleteFeedMutation = (deleteFeedId) => {
//   const queryClient = useQueryClient();

//   return useMutation(() => deleteFeed(deleteFeedId), {
//     onSuccess: () => {
//       alert("피드 삭제 성공");
//       queryClient.invalidateQueries("Feeds");
//     },
//     onError: () => {
//       alert("피드 삭제 실패");
//     },
//   });
// };
