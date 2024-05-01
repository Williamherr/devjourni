import React from "react";
import DataNotFoundIcon from "./ui/icons/data-not-found";

const EmptyState = () => {
  return (
    <div className="text-center w-full m-auto space-y-2">
      <div className="w-fit m-auto">
        <DataNotFoundIcon />
      </div>
      <h1 className="bold">Oops!</h1>
      <p>No Data Found!</p>
    </div>
  );
};

export default EmptyState;
