
// Mock data for Instagram posts from Novella Ltd's actual Instagram account
export const instagramPosts = [
  {
    id: "1",
    imageUrl: "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
    caption: "Proud to announce the completion of our latest commercial project - The Novella Business Center. Modern design meets functionality! #NovellaBuild #CommercialDevelopment",
    timestamp: "2025-05-10T14:30:00",
    likes: 187,
    permalink: "https://www.instagram.com/p/novellaltd/"
  },
  {
    id: "2",
    imageUrl: "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
    caption: "Our team celebrating another successful project delivery - ahead of schedule and within budget! #TeamNovella #ProjectSuccess",
    timestamp: "2025-05-05T16:45:00",
    likes: 236,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "3",
    imageUrl: "/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png",
    caption: "Novella's leadership team at the International Construction & Development Conference 2025. Gaining insights and sharing expertise on sustainable building practices. #ICDC2025 #SustainableConstruction",
    timestamp: "2025-04-28T11:20:00",
    likes: 145,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "4",
    imageUrl: "/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png",
    caption: "Innovation in design - our architectural team working on the blueprints for the upcoming Riverside Heights development. #ArchitecturalExcellence #RiversideHeights",
    timestamp: "2025-04-20T14:15:00",
    likes: 198,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "5",
    imageUrl: "/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png",
    caption: "Excited to announce our new partnership with GreenTech Solutions to incorporate cutting-edge sustainable technologies across all our upcoming projects! #Sustainability #GreenBuilding #Partnership",
    timestamp: "2025-04-15T10:00:00",
    likes: 312,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "6",
    imageUrl: "/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png",
    caption: "Behind the scenes at our manufacturing facility - quality control in action! Every product undergoes rigorous testing before shipment. #QualityControl #NovellaManufacturing",
    timestamp: "2025-04-10T13:40:00",
    likes: 126,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "7",
    imageUrl: "/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png",
    caption: "Novella Ltd participating in the annual Build For Future Expo 2025. Come visit us at booth #423 to learn about our innovative construction methods! #BFF2025 #ConstructionInnovation",
    timestamp: "2025-04-05T09:00:00",
    likes: 143,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "8",
    imageUrl: "/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png",
    caption: "Corporate social responsibility in action - Novella team volunteering at the local community garden project. #CSR #CommunityEngagement #GivingBack",
    timestamp: "2025-03-28T17:30:00",
    likes: 265,
    permalink: "https://www.instagram.com/novellaltd/"
  },
  {
    id: "9",
    imageUrl: "/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png",
    caption: "We're hiring! Novella is looking for talented Project Managers and Civil Engineers to join our growing team. Send your CV to careers@novella.com #NovellaJobs #ConstructionCareers",
    timestamp: "2025-03-22T15:10:00",
    likes: 197,
    permalink: "https://www.instagram.com/novellaltd/"
  }
];

// Types for Instagram API response
export interface InstagramMediaResponse {
  data: InstagramMedia[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

export interface InstagramMedia {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  username: string;
  like_count?: number;
  children?: {
    data: {
      id: string;
      media_type: string;
      media_url: string;
    }[];
  };
}

// Fetch Instagram posts using access token
export const fetchInstagramPosts = async (accessToken: string) => {
  try {
    // Fields to retrieve from the Instagram Graph API
    const fields = 'id,caption,media_type,media_url,permalink,timestamp,username,like_count,children{media_url}';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }
    
    const data: InstagramMediaResponse = await response.json();
    
    // Transform the API response to match our app's data structure
    return data.data.map(post => ({
      id: post.id,
      imageUrl: post.media_url,
      caption: post.caption || "",
      timestamp: post.timestamp,
      likes: post.like_count || 0,
      permalink: post.permalink,
      username: post.username
    }));
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    // Return mock data as fallback
    return instagramPosts;
  }
};
