import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { mutate } from "swr";

export const getMostRecent = (router: AppRouterInstance) => {
  fetch("/api/pages/latest")
    .then((res) => res.json())
    .then(async (data) => {
      if (data.recentId) {
        mutate(`/api/pages`);
        router.push(`/${data.recentId}`);
      }
    })
    .catch((error) => console.error("Failed to get recent page: ", error));
};
