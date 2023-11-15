"use client";

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

export default function Home() {
  return (
    <main>
      <Container maxW="6xl" mt={8}>
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
                <Radio value="1" fontSize="lg">
                  Open Now
                </Radio>
                <Select placeholder="Price" w={32}>
                  <option value="option1">Terendah</option>
                  <option value="option2">Tertinggi</option>
                </Select>
                <Select placeholder="Categories" w={40}>
                  <option value="option1">Category 1</option>
                  <option value="option2">Category 2</option>
                </Select>
              </HStack>
              <Spacer />
              <Box>
                <Button>Clear All</Button>
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
              <RestaurantCard title="Very Long Name Restaurants Number 1 In List" />
              <RestaurantCard title="Restaurant 2" />
              <RestaurantCard title="Restaurant 3" />
              <RestaurantCard title="Restaurant 4" />
              <RestaurantCard title="Restaurant 5" />
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
