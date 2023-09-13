import getListingsByCategory from "@/actions/get-categoryListing";
import ListingList from "@/components/listing-list";
import Container from "@/components/ui/container";

const CategoryListingPage =async (
    {params}
    : { params: { categoryId: string }}
    ) => {
      console.log(params.categoryId);
    const categoryListings = await getListingsByCategory(params.categoryId);
    return (
        <Container>
            <div className="space-y-10 pb-10">
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ListingList title="Latest collection" items={categoryListings} />
            </div>
      </div>

        </Container>
    );
    
}

export default CategoryListingPage;