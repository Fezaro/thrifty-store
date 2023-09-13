// "use client";
import getListing from "@/actions/get-listing";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";
import { Listing } from "@/types";
import { useEffect, useState } from "react";

interface ListingPageProps {
    params: {
        listingId: string;
    },
}

const ListingPage: React.FC<ListingPageProps> = async (
    { params }
) => {

const renderListing = async () => {
    const fetchedListing = await getListing(params.listingId);
    
    if (!fetchedListing) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={fetchedListing.imageURLs} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={fetchedListing} />
                        </div>
                    </div>
                    <hr className="my-10" />
                </div>
            </Container>
        </div>
    );
};

return renderListing();
};
export default ListingPage;