import React from "react";
import { featuredProperties } from "../../../../constants";
import PropertyCard from "@/components/ui/property-card";
import Link from "next/link";

const FeaturedListing = () => {
  return (
    <div className="md:px-24 px-6 py-10">
      <span className="text-[40px] font-semibold">Featured Listing</span>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
      <div className="flex justify-end py-3">
        <Link href="/featured-properties" className="text-xl text-secondary">
          View more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedListing;
