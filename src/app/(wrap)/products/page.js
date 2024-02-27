import React from "react";
import FeaturedServices from "@/components/featuredServices/FeaturedServices";
import ServicesBanner from "@/components/servicesBanner/ServicesBanner";
import ServicesList from "@/components/servicesList/ServicesList";
import { get_category_list_by_slug } from "@/backend/models/categoryModel";

const Products = async () => {
  const response = await get_category_list_by_slug("Products");
  const data = response?.data;
  const serviceListData = data[0]?.serviceList;
  
  const featuredSectionData = serviceListData?.filter((item) =>{
    return JSON?.parse(item?.featured_for)?.find((value) =>{
      return value === "Product Page"
    })
  })

  const serviceListSection = serviceListData?.filter((item) =>{
    return JSON?.parse(item?.featured_for)?.find((value) =>{
      return value === "Product Listing"
    })
    // return JSON?.parse(item?.featured_for) === "Service Listing"
  })
  return (
    <>
      <ServicesBanner data={data} />
      <FeaturedServices data={featuredSectionData} />
      <ServicesList data={serviceListSection} />
    </>
  );
};

export default Products;
