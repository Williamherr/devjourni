"use client";

import TextEditor from "@/app/novel/components/Editor";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

function Page({ params }: { params: { pageId: string } }) {
  const uid = "2ce20d56-268a-445e-8f4c-bdb4c9b22d08";
  const { data, error, isLoading } = useSWR(
    `/api/pages/${params.pageId}?uid=${uid}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  else console.log(data.pages.rows[0].doc);

  return !isLoading && <TextEditor doc={data.pages.rows[0].doc} />;
}

export default Page;
