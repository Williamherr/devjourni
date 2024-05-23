import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { getMostRecent } from "./getLatestPage";

export const deletePages = async (
  pathname: string,
  id: number | string,
  router: AppRouterInstance
) => {
  try {
    await fetch(`/api/pages/subpages/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.status !== 200) {
          console.error(data.error);
          throw new Error(data.error);
        }
        if (id == pathname) {
          getMostRecent(router);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        throw new Error(`HTTP error! status: ${error.status}`);
      });
  } catch (error: any) {
    console.error("Error:", error);
  }
};
