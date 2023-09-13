import { Listing } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/listings`;

const getListings = async (): Promise<Listing[]> => {
  const res = await fetch(URL, {cache: 'no-store'});

  // console.log(res);

  return res.json();
};

export default getListings;
