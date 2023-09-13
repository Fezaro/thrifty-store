import { Listing } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getListingsByCategory = async (categoryId: string): Promise<Listing[]> => {
  const res = await fetch(`${URL}/${categoryId}`, { cache: 'no-store' });

  return res.json();
};

export default getListingsByCategory;
