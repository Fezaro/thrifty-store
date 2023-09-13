import getListings from '@/actions/get-listings';
import ListingList from '@/components/listing-list';
import Container from '@/components/ui/container'
import Image from 'next/image'

const StoreHomePage = async () => {
  const listings = await getListings();
  // const listings = [];
  return (


    <Container>
      <div className="space-y-10 pb-10">

        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div style={{ backgroundImage: `url("/blueaqua.png")` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                Thrifty G Collection
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl sm:max-w-xl max-w-xs">
                <p>Thrifty G Collection is a collection of thrifted items that are handpicked for quality and a unique touch.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ListingList title="Latest collection" items={listings} />
            </div>
      </div>
    </Container >
  )
}


export default StoreHomePage