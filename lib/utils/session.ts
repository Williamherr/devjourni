import { auth } from "@/auth";
import { isNullOrEmpty } from "../snippets";

class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

const isUserAdmin = (role: string): boolean => {
  return role === "admin";
};

const getUidByRoleClient = async (): Promise<boolean> => {
  const session = await auth();
  const uid = session?.user?.id || "";
  const role = session?.user?.role || "user";

  validations(uid);

  if (isUserAdmin(role)) return true;

  return false;
};

const getUidByRole = async (): Promise<string> => {
  const session = await auth();
  const uid = session?.user?.id || "";
  const role = session?.user?.role || "user";

  validations(uid);

  if (isUserAdmin(role)) return uid;

  throw new UnauthorizedError("You are not authorized to perform this action");
};

const validations = (uid: string) => {
  if (uid === null) throw new Error("There are no uid");
};

export { getUidByRole, getUidByRoleClient, isUserAdmin };
