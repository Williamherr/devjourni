import { addAccess, hasAccessToPage, deleteAccess } from "../schema/pageAccess";

const hasReadAccess = (userId: string, pageId: number) => {
  return hasAccessToPage(userId, pageId);
};

const hasWriteAccess = (userId: string, pageId: number) => {
  return hasAccessToPage(userId, pageId, "write");
};

const hasAdminAccess = (userId: string, pageId: number) => {
  return hasAccessToPage(userId, pageId, "admin");
};

const addAdminAccess = (pageId: string, userId: string) => {
  return addAccess(pageId, userId, "admin");
};

const addWriteAccess = (pageId: string, userId: string) => {
  return addAccess(pageId, userId, "write");
};

const addReadAccess = (pageId: string, userId: string) => {
  return addAccess(pageId, userId);
};

const removeAccess = (pageId: string, userId: string) => {
  return deleteAccess(pageId, userId);
};

export {
  hasReadAccess,
  hasWriteAccess,
  hasAdminAccess,
  addAdminAccess,
  addWriteAccess,
  addReadAccess,
  removeAccess,
};
