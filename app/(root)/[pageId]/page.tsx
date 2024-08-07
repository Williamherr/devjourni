"use client";

import TextEditor from "@/components/novel/Editor";
import useSWR from "swr";
import { fetcher, options } from "@/lib/utils";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import EmptyState from "@/components/EmptyState";
import { isNullOrEmpty } from "@/lib/snippets";
import { PageMenu } from "@/components/PageMenu/PageMenu";

function Page({ params }: { params: { pageId: number } }) {
  const { data, error, isLoading, isValidating } = useSWR(
    `/api/pages/${params.pageId}`,
    fetcher,
    options
  );

  if (error) return <EmptyState />;
  if (isLoading || isValidating)
    return <LoadingSpinner size={45} className="absolute top-1/2 left-1/2" />;

  return !isNullOrEmpty(data.pages?.rows) ? (
    <>
      <TextEditor
        doc={JSON.parse(data.pages.rows[0]?.doc)}
        pageId={params.pageId}
      />
    </>
  ) : (
    <EmptyState />
  );
}

export default Page;
