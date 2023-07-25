"use client";
import { useQuery } from "convex/react";

import { api } from "../../../convex/_generated/api";

const CreatePage = () => {
  const products = useQuery(api.products.get);
  return <div className="text-3xl m-5">{products?.toString()}</div>;
};

export default CreatePage;
