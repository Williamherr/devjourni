import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = (url: any) => fetch(url).then((r) => r.json());

export const options = {
  revalidateIfStale: true,
  revalidateOnReconnect: false,
  revalidateOnFocus: false,
};
