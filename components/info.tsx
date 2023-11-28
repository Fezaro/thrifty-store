"use client"
import { Listing } from "@/types";
import Currency from "./ui/currency";

import { Copy, PhoneCall, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface InfoProps {
    data: Listing;
}

const Info: React.FC<InfoProps> = ({ data }) => {
    const listingUrl = data?.listingURL;

    const onCopy = (listingUrl: string) => {

        navigator.clipboard.writeText(listingUrl);
        toast.success('Listing Link copied to clipboard.');
    }
    const handleCopyToWhatsApp = async () => {
        try {
            const textToCopy = `Check out this listing: ${listingUrl}`;
            await navigator.clipboard.writeText(textToCopy);
            toast.success('Sharing on WhatsApp...')
            const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToCopy)}`;
            window.open(whatsappShareUrl, '_blank');
        } catch (error) {
            console.error('Error copying to clipboard:', error);
        }
    };

    const handlePhoneCall = async () => {
        await navigator.clipboard.writeText(data?.contactPhoneNumber);
        toast.success('Phone number copied to clipboard.')
        window.open(`tel:${data?.contactPhoneNumber}`);
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Description:</h3>
                    <div>
                        {data?.description}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Category:</h3>
                    <div>
                        {data?.category}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Pick-up locatiion:</h3>
                    <div>
                        {data?.pickUpLocation}
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Reason for sale:</h3>
                    <div>
                        {data?.reasonForSelling}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Duration Used:</h3>
                    <div>
                        {data?.durationUsed}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <Button variant="outline" size="sm" onClick={() => onCopy(data.listingURL)}>
                        <Copy className="h-4 w-4" />
                    </Button>
                    <div className="text-sm text-gray-500">Copy Listing link</div>

                </div>

                <div className="flex items-center gap-x-4">
                <Button variant="outline" size="sm" onClick={() => handleCopyToWhatsApp()}>
                <Share2 className="h-4 w-4"/>
                </Button>
                <div className="text-sm text-gray-500">Share on WhatsApp</div>
                </div>
                <div className="flex items-center gap-x-4">
                <Button variant="outline" size="sm" onClick={() => handlePhoneCall()}>
                    <PhoneCall className="h-4 w-4"/>
                </Button>
                <div className="text-sm text-gray-500">Contact Seller</div>
            </div>

            </div>
        </div>

    )
}
export default Info;