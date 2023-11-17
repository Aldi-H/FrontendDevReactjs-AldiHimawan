import axios from "axios";
import { create } from "zustand";

type Image = {
  url: string;
};

type Category = {
  id: string;
  name: string;
};

type Reviews = {
  reviewName: string;
  reviewDesc: string;
  reviewImage: string;
  reviewRating: number;
};

type Restaurants = {
  id: string;
  restaurantPhoto: string;
  restaurantName: string;
  cuisine: string;
  restaurantCategories: Category[];
  price: number;
  rating: number;
  openStatusCategory: boolean;
};

type Restaurant = {
  restaurantName: string;
  restaurantImage: string;
  restaurantDesc: string;
  restaurantAddress: string;
  restaurantCity: string;
  restaurantPrice: number;
  restaurantRating: number;
  restaurantCategories: Category[];
  restaurantReview: Reviews[];
};

type RestaurantStoreState = {
  restaurants: Restaurants[];
  restaurant: Restaurant;
  isOpenNow: boolean | null;
  priceFilter: "asc" | "desc" | null;
  categoryFilter: string | null;
};

type RestaurantStoreAction = {
  getAllRestaurants: () => Promise<void>;
  getRestaurantDetail: (params: string) => Promise<void>;
  setIsOpenNow: (value: boolean | null) => void;
  setPriceFilter: (value: "asc" | "desc" | null) => void;
  setCategoryFilter: (value: string | null) => void;
  clearAllFilters: () => void;
};

const useRestaurantStore = create<RestaurantStoreState & RestaurantStoreAction>(
  (set, get) => ({
    restaurants: [],
    restaurant: {
      restaurantName: "",
      restaurantImage: "",
      restaurantDesc: "",
      restaurantAddress: "",
      restaurantCity: "",
      restaurantPrice: 0,
      restaurantRating: 0,
      restaurantCategories: [],
      restaurantReview: [],
    },
    isOpenNow: null,
    priceFilter: null,
    categoryFilter: null,

    getAllRestaurants: async () => {
      try {
        let apiUrl = `${process.env.BASE_URL}/restaurant`;

        if (get().categoryFilter) {
          apiUrl += `?categoryId=${get().categoryFilter}`;
        }

        const response = await axios.get(apiUrl);

        const restaurants = response.data.map(
          (restaurantItem: {
            id: string;
            name: string;
            images: Image[];
            status: boolean;
            categories: Category[];
            price: number;
            rating: number;
          }) => {
            return {
              id: restaurantItem.id,
              restaurantPhoto: restaurantItem.images[0]?.url,
              restaurantName: restaurantItem.name,
              cuisine: restaurantItem.categories[0]?.name,
              restaurantCategories: restaurantItem.categories,
              price: restaurantItem.price,
              rating: restaurantItem.rating,
              openStatusCategory: restaurantItem.status,
            };
          },
        );

        set({ restaurants: restaurants });
      } catch (error) {
        console.error(error);
      }
    },

    getRestaurantDetail: async (params: string) => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}/restaurant/${params}`,
        );

        set({
          restaurant: {
            restaurantName: response.data.name,
            restaurantImage: response.data.images[0]?.url,
            restaurantDesc: response.data.description,
            restaurantAddress: response.data.address,
            restaurantCity: response.data.city,
            restaurantPrice: response.data.price,
            restaurantRating: response.data.rating,
            restaurantCategories: response.data.categories.map(
              (categoriesItem: { name: string }) => {
                return {
                  name: categoriesItem.name,
                };
              },
            ),
            restaurantReview: response.data.reviews.map(
              (reviewsItem: {
                name: string;
                text: string;
                image: string;
                rating: number;
              }) => {
                return {
                  reviewName: reviewsItem.name,
                  reviewDesc: reviewsItem.text,
                  reviewImage: reviewsItem.image,
                  reviewRating: reviewsItem.rating,
                };
              },
            ),
          },
        });
      } catch (error) {
        console.error(error);
      }
    },

    setIsOpenNow: (value) => {
      set({ isOpenNow: value });
    },

    setPriceFilter: (value) => {
      set({ priceFilter: value });
    },

    setCategoryFilter: (value) => {
      set({ categoryFilter: value });
    },

    clearAllFilters: () => {
      set({
        isOpenNow: null,
        priceFilter: null,
        categoryFilter: null,
      });
    },
  }),
);

export default useRestaurantStore;
