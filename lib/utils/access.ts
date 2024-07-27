import { hasAccessToPage } from "../schema/user";

export const hasReadAccess = (userId: string, pageId: number) => {
  return hasAccessToPage(userId, pageId);
};
