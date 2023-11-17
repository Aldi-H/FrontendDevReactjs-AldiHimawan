"use client";

import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaStar, FaLocationDot, FaCity } from "react-icons/fa6";
import useRestaurantStore from "@/lib/RestaurantStore";
import ReviewPage from "@/app/restaurantDetail/review";

const RestaurantDetail = ({ params }: { params: { id: string } }) => {
  const { getRestaurantDetail, restaurant } = useRestaurantStore();

  useEffect(() => {
    getRestaurantDetail(params.id);
  }, [getRestaurantDetail, params.id]);

  return (
    <Container maxW="5xl" mt={8}>
      <Box display="flex" gap={12}>
        <Image
          src={
            restaurant.restaurantImage?.length === undefined
              ? "https://placehold.co/300x320/png"
              : restaurant.restaurantImage
          }
          alt="Restaurant Image"
          height={320}
          width={300}
          rounded={5}
        />

        <HStack
          justify="start"
          // h="100vh"
          spacing={12}
        >
          <Box width="100%">
            <Box>
              <Heading as="h3">{restaurant.restaurantName}</Heading>
            </Box>

            <HStack justifyItems="center" mt={2} spacing={4}>
              <Box alignContent="center" display="flex" gap={2}>
                <Box>
                  <Icon as={FaLocationDot} color="blue.800" w={4} h={4} />
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="sm"
                >
                  {restaurant.restaurantAddress === ""
                    ? "unknown"
                    : restaurant.restaurantAddress}
                </Box>
              </Box>

              <Box alignContent="center" display="flex" gap={2}>
                <Box>
                  <Icon as={FaCity} color="blue.800" w={5} h={5} />
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="sm"
                >
                  {restaurant.restaurantCity === ""
                    ? "unknown"
                    : restaurant.restaurantCity}
                </Box>
              </Box>

              <Box alignContent="center" display="flex" gap={2}>
                <Box>
                  <Icon as={FaStar} color="yellow" w={5} h={5} />
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="sm"
                  textTransform="uppercase"
                >
                  {restaurant.restaurantRating}
                </Box>
              </Box>
            </HStack>

            <HStack mt={4}>
              {restaurant.restaurantCategories.map((categoriesItem, id) => {
                return (
                  <Badge key={id} colorScheme="green">
                    {categoriesItem.name}
                  </Badge>
                );
              })}
            </HStack>

            <Box mt={4}>
              <Text as="span">{restaurant.restaurantDesc}</Text>
            </Box>

            <Box mt={8}>
              <Divider orientation="horizontal" mb={3} />
              <HStack spacing={16} px={6}>
                <Text fontSize="md" fontWeight="bold" color="blue.800">
                  Ulasan
                </Text>
              </HStack>
              <Divider orientation="horizontal" my={3} />

              <Box mt={4}>
                {restaurant.restaurantReview.map((reviewItem, id) => {
                  return (
                    <Box key={id}>
                      <ReviewPage
                        reviewerRating={reviewItem.reviewRating}
                        reviewerName={reviewItem.reviewName}
                        reviewText={reviewItem.reviewDesc}
                        reviewImage={reviewItem.reviewImage}
                      />
                      <Divider orientation="horizontal" mt={8} />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};

export default RestaurantDetail;
