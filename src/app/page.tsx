"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  HStack,
  Radio,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";

import RestaurantCard from "@/app/components/RestaurantCard";
import useRestaurantStore from "@/lib/RestaurantStore";
import useCategoriesStore from "@/lib/CategoriesStore";

export default function Home() {
  const {
    getAllRestaurants,
    restaurants,
    isOpenNow,
    setIsOpenNow,
    priceFilter,
    setPriceFilter,
    categoryFilter,
    setCategoryFilter,
    clearAllFilters,
  } = useRestaurantStore();
  const { getAllCategories, categories } = useCategoriesStore();

  const [selectedPriceFilter, setSelectedPriceFilter] = useState<
    null | "" | "asc" | "desc"
  >(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<
    "" | string
  >("");

  const handleOpenNowChange = (value: boolean | null) => {
    setIsOpenNow(value);
  };

  const handlePriceFilterChange = (value: "asc" | "desc" | null) => {
    setPriceFilter(value);
    setSelectedCategoryFilter(value === null ? "" : value);
  };

  const handleCategoryFilterChange = (value: string | null) => {
    setCategoryFilter(value);
    setSelectedCategoryFilter(value === null ? "" : value);
  };

  const filteredRestaurants = restaurants
    .filter((item) => {
      const categoryAtIndexZero = item.restaurantCategories[0];
      return (
        (isOpenNow === null ||
          (isOpenNow === true && item.openStatusCategory) ||
          (isOpenNow === false &&
            (item.openStatusCategory === false ||
              item.openStatusCategory === undefined))) &&
        (categoryFilter === null || categoryFilter === categoryAtIndexZero?.id)
      );
    })
    .sort((a, b) => {
      if (priceFilter === "asc") {
        return a.price - b.price;
      } else if (priceFilter === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  const handleClearAll = () => {
    clearAllFilters();

    setSelectedPriceFilter(null);
    setSelectedCategoryFilter("");

    getAllRestaurants();
  };

  useEffect(() => {
    getAllRestaurants();
    getAllCategories();
  }, [getAllRestaurants, getAllCategories]);

  return (
    <main>
      <Container maxW="5xl" my={8}>
        {/* Header Title */}
        <Box px={12}>
          <Text fontSize="4xl" my={4}>
            Restaurants
          </Text>

          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>

        {/* Filter Navigation */}
        <Box mt={8}>
          <Divider orientation="horizontal" mb={3} />
          <Box px={12}>
            <HStack>
              <HStack spacing={5}>
                <Text fontSize="md" fontWeight="semibold">
                  Filter By :
                </Text>
                <Radio
                  fontSize="lg"
                  isChecked={isOpenNow === true}
                  onChange={() => handleOpenNowChange(true)}
                >
                  Open Now
                </Radio>
                <Select
                  value={selectedPriceFilter ?? ""}
                  placeholder="Price"
                  w={32}
                  onChange={(e) =>
                    handlePriceFilterChange(
                      e.target.value as "asc" | "desc" | null,
                    )
                  }
                >
                  <option value="asc">Terendah</option>
                  <option value="desc">Tertinggi</option>
                </Select>
                <Select
                  value={selectedCategoryFilter}
                  placeholder="Categories"
                  w={40}
                  onChange={(e) => {
                    handleCategoryFilterChange(e.target.value);
                  }}
                >
                  {categories.map((item, id) => {
                    return (
                      <option key={id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </Select>
              </HStack>
              <Spacer />
              <Box>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    handleClearAll();
                  }}
                >
                  Clear All
                </Button>
              </Box>
            </HStack>
          </Box>
          <Divider orientation="horizontal" mt={3} />
        </Box>

        <Box px={12} mt={6}>
          <Box>
            <Text fontSize="4xl">All Restaurants</Text>
          </Box>

          <Box mt={6}>
            <Grid templateColumns="repeat(4, 1fr)" gap={8}>
              {filteredRestaurants.map((item, id) => {
                return (
                  <RestaurantCard
                    key={id}
                    title={item.restaurantName}
                    rating={item.rating}
                    category={item.cuisine}
                    imageUrl={
                      item.restaurantPhoto === undefined
                        ? "https://placehold.co/600x400/png"
                        : item.restaurantPhoto
                    }
                    openStatus={item.openStatusCategory ? "Open Now" : "Closed"}
                    isOpen={item.openStatusCategory}
                    price={item.price}
                    href={`/restaurantDetail/${item.id}`}
                  />
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
