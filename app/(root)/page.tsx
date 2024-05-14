"use client";
import { useSession } from "next-auth/react";

import EmptyState from "@/components/EmptyState";
import TextEditor from "@/components/novel/Editor";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { tipTapShortcuts } from "@/lib/content";
import { isNullOrEmpty } from "@/lib/snippets";
import { fetcher, options } from "@/lib/utils";
import useSWRImmutable from "swr";

function Page() {
  const { data, error, isLoading } = useSWRImmutable(
    `/api/note/1`,
    fetcher,
    options
  );

  const { data: session } = useSession();

  if (error) return <EmptyState />;
  if (isLoading)
    return <LoadingSpinner size={45} className="relative m-auto" />;

  return !isNullOrEmpty(data.notes[0]) ? (
    <TextEditor
      editable={session?.user?.role === "admin" || false}
      doc={data?.notes[0].doc || tipTapShortcuts}
      pageId={1}
      requireAdmin
    />
  ) : (
    <EmptyState />
  );
}

export default Page;
