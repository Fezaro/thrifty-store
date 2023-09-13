// import ListingCard from "@/components/ui/listing-card";
import { Listing } from "@/types";
import NoResults from "./ui/no-results";
import ListingCard from "./ui/listing-card";
// import NoResults from "@/components/ui/no-results";

interface ListingListProps {
  title: string;
  items: Listing[]
}

const ListingList: React.FC<ListingListProps> = ({
  title,
  items
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ListingCard key={item.listingURL} data={item} />
          

        ))}
      </div>
    </div>
  );
}

export default ListingList;