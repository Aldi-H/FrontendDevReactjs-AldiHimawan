"use client";

import { useState } from "react";
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
import DetailPage from "@/app/restaurantDetail/review";

const RestaurantDetail = ({ params }: { params: { id: string } }) => {
  return (
    <Container maxW="5xl" mt={8}>
      <Box display="flex" gap={12}>
        <Image
          src="https://placehold.co/300x320/png"
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
              <Heading as="h3">Restaurant Name</Heading>
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
                  Address
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
                  City
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
                  5.5
                </Box>
              </Box>
            </HStack>

            <HStack mt={4}>
              <Badge colorScheme="green">American</Badge>
              <Badge colorScheme="green">Asian</Badge>
              <Badge colorScheme="green">Indonesian</Badge>
            </HStack>

            <Box mt={4}>
              <Text as="span">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
                accusantium consectetur provident cumque nam maiores voluptatum
                dignissimos assumenda, quisquam, animi voluptatem molestias.
                Molestias illo dignissimos voluptate soluta vero cupiditate non?
              </Text>
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
                <DetailPage />
              </Box>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};

export default RestaurantDetail;
