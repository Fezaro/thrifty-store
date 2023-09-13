
export interface User {
    name: string;
    email: string;
    isSeller: boolean;
    createdAt: any;
    updatedAt: any;
    userID: string;
    isActive: boolean;
    phoneNumber: string;
  }
  
  export interface Seller {
    userID: string; // Reference to Users collection
    shopName: string;
    shopProfileImageURL: string | null;
    location: string;
    bio: string;
    createdAt: any;
    updatedAt: any;
    instagramURL: string;
    instagramUsername: string;
    instagramImported: boolean;
    isActive: boolean;
  }
  
  export interface Listing {
    title: string;
    description: string;
    price: number;
    category: string;
    imageURLs: { }[];
    sellerID: string; // Reference to Sellers collection
    createdAt: any;
    updatedAt: any;
    isActive: boolean;
    listingURL: string;
    contactPhoneNumber: string;
    reasonForSelling: string;
    durationUsed: string;
    pickUpLocation: string;
    listingId: string;
  }
  
  export interface Category {
    categoryId:string;
    name: string;
    isActive: boolean;
  }
  