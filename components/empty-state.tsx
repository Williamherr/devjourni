import React from "react";
import DataNotFoundIcon from "./ui/icons/data-not-found";

const EmptyState = () => {
  return (
    <div className="text-center m-auto space-y-2">
      <DataNotFoundIcon />
      <h1 className="bold">Oops!</h1>
      <p>No Data Found!</p>
    </div>
  );
};

export default EmptyState;
