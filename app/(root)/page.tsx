"use client";

import EmptyState from "@/components/empty-state";
import TextEditor from "@/components/novel/Editor";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { tipTapShortcuts } from "@/lib/content";
import { isNullOrEmpty } from "@/lib/snippets";
import { fetcher } from "@/lib/utils";
import useSWRImmutable from "swr";

const options = {
  revalidateIfStale: true,
  revalidateOnReconnect: false,
  revalidateOnFocus: false,
};

function Page() {
  const {
    data: user,
    error: userError,
    isLoading: userLoading,
  } = useSWRImmutable(`/api/user/isAdmin`, fetcher, options);
  const { data, error, isLoading } = useSWRImmutable(
    `/api/note/1`,
    fetcher,
    options
  );

  if (error || userError) return <EmptyState />;
  if (isLoading || userLoading)
    return <LoadingSpinner size={45} className="relative m-auto" />;

  return !isNullOrEmpty(data.notes?.rows) ? (
    <TextEditor
      editable={user?.isAdmin || false}
      doc={JSON.parse(data.notes?.rows[0].doc) || tipTapShortcuts}
      pageId={null}
    />
  ) : (
    <EmptyState />
  );
}

export default Page;
