import { useRouter } from "next/navigation";

import DataNotFoundIcon from "./ui/icons/data-not-found";
import { Button } from "./ui/button";

const EmptyState = () => {
  const router = useRouter();

  return (
    <div className="flex h-full">
      <div className="m-auto space-y-6">
        <div className="text-center space-y-1 ">
          <DataNotFoundIcon />
          <h1 className="font-bold">Oops!</h1>
          <p>No Data Found!</p>
          <p>This page does not exist.</p>
        </div>
        <Button className="w-full" onClick={() => router.push("/")}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
