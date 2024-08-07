import { useRouter } from "next/navigation";

import DataNotFoundIcon from "./ui/icons/data-not-found";
import { Button } from "./ui/button";

const EmptyState = () => {
  const router = useRouter();

  return (
    <div className="flex h-full">
      <div className="m-auto space-y-6">
        <div className="space-y-6">
          <div className="flex justify-center flex-col items-center">
            <DataNotFoundIcon />
            <h1 className="font-bold">Oops!</h1>
            <p>No Data Found.</p>
          </div>
          <div>
            <p>This page does not exist</p>
            <p>or you do not have access to it.</p>
          </div>
        </div>
        <Button className="w-full" onClick={() => router.push("/")}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
