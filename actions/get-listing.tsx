import { Listing } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/listings`;

const getListing = async (id:string): Promise<Listing> => {
  const res = await fetch(`${URL}/${id}`);

  // console.log(res);

  return res.json();
};

export default getListing;
