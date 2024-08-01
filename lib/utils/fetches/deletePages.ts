import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { getMostRecent } from "./getLatestPage";
import { toast } from "sonner";

export const deletePages = async (
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
        getMostRecent(router);
      }
    })
    .catch((error) => {
      toast.error("Error: " + error.message);
      console.error("Error:", error);
    });
};
