import React from "react";
import PackageCard from "./package/PackageCard";

function Packages() {
  return (
    <div className="flex flex-col">
      <PackageCard />
      <PackageCard />
      <PackageCard />
    </div>
  );
}

export default Packages;
