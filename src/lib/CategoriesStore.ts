import axios from "axios";
import { create } from "zustand";

type Categories = {
  id: string;
  name: string;
};

type CategoriesStoreState = {
  categories: Categories[];
};

type CategoriesStoreAction = {
  getAllCategories: () => Promise<void>;
  setCategories: (categories: Categories[]) => void;
};

const useCategoriesStore = create<CategoriesStoreState & CategoriesStoreAction>(
  (set) => ({
    categories: [],

    getAllCategories: async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/category`);

        const categories = response.data.map(
          (categoriesItem: { id: string; name: string }) => {
            return {
              id: categoriesItem.id,
              name: categoriesItem.name,
            };
          },
        );

        set({ categories: categories });
      } catch (error) {
        console.error(error);
      }
    },

    setCategories: (categories) => {
      set({ categories });
    },
  }),
);

export default useCategoriesStore;
