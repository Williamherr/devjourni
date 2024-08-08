import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getMostRecent = async (router: AppRouterInstance) => {
  fetch("/api/pages/latest")
    .then((res) => res.json())
    .then(async (data) => {
      if (data.recentId) {
        await router.push(`/${data.recentId}`);
      }
    })
    .catch((error) => console.error("Failed to get recent page: ", error));
};
