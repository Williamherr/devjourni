import { toast } from "sonner";
import { mutate } from "swr";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface PageCount {
  newId: number;
}
export const createPageFetcher = async (
  id: number | string,
  router: AppRouterInstance
) => {
  fetch("/api/pages/subpages/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      else throw Error("Failed to create page for page id: " + id);
    })
    .then(async (data: PageCount) => {
      if (data.newId != 0) {
        await router.push(`/${data.newId}`);
        mutate(`/api/pages`);
      } else {
        throw Error("Failed to create page for page id: " + id);
      }
    })
    .catch((error) => {
      toast.error("Error: " + error.message);
      console.error("Error:", error);
    });
};
