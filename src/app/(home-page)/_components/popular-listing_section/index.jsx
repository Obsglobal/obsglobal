import PropertyCard from "@/components/ui/property-card";
import { popularProperties } from "@/constants";
import Link from "next/link";
import React from "react";

const PopularListing = () => {
  return (
    <div className="md:px-24 px-6 py-10">
      <span className="text-[40px] font-semibold">Popular Listing</span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {popularProperties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      <div className="flex justify-end py-3">
        <Link href="featured-properties" className="text-xl text-secondary">
          View more
        </Link>
      </div>
    </div>
  );
};

export default PopularListing;
