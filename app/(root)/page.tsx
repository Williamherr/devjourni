"use client";

import EmptyState from "@/components/empty-state";
import TextEditor from "@/components/novel/Editor";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { tipTapShortcuts } from "@/lib/content";
import { isNullOrEmpty } from "@/lib/snippets";
import { fetcher, options } from "@/lib/utils";
import useSWRImmutable from "swr";

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
  return !isNullOrEmpty(data.notes[0]) ? (
    <TextEditor
      editable={user?.isAdmin || false}
      doc={data?.notes[0].doc || tipTapShortcuts}
      pageId={1}
      requireAdmin
    />
  ) : (
    <EmptyState />
  );
}

export default Page;
