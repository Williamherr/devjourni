"use client";

import TextEditor from "@/app/novel/components/Editor";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

function Page({ params }: { params: { pageId: number } }) {
  const { data, error, isLoading } = useSWR(
    `/api/pages/${params.pageId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    !isLoading && (
      <TextEditor
        doc={JSON.parse(data.pages.rows[0].doc)}
        pageId={params.pageId}
      />
    )
  );
}

export default Page;
