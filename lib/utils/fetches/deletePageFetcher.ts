import { toast } from "sonner";
import { mutate } from "swr";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { getMostRecent } from "./getLatestPage";

export const deletePageFetcher = async (
  pathname: string,
  id: number | string,
  router: AppRouterInstance
) => {
  await fetch(`/api/pages/subpages/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(async (data) => {
      if (data.status !== 200) {
        throw new Error(data.error);
      }
      if (id == pathname) {
        await getMostRecent(router);
      }
      mutate(`/api/pages`);
      toast.success("Page deleted successfully");
    })
    .catch((error) => {
      toast.error("Error: " + error.message);
      console.error("Error:", error);
    });
};
