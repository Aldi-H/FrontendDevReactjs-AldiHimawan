"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

type RestaurantCardProps = {
  title: string;
};

const RestaurantCard = ({ title }: RestaurantCardProps) => {
  return (
    <Card variant="unstyled">
      <CardBody>
        <Image
          src="https://placehold.co/600x400/png"
          alt="Restaurant Image"
          objectFit="cover"
          height={40}
          width={60}
        />

        <Stack mt={4} spacing={2}>
          <Text>{title}</Text>

          <StarRatings
            rating={(8.8 / 10) * 5}
            numberOfStars={5}
            starDimension="16px"
            starSpacing="1px"
          />

          <Box
            display="flex"
            justifyContent="space-between"
            mt="2"
            alignItems="center"
          >
            <Box display="flex">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                Categories &bull; Price
              </Box>
            </Box>

            <Box as="span" color="gray.600" fontSize="sm">
              ● reviews
            </Box>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter mt={6}>
        <Button width="full" colorScheme="blue">
          LEARN MORE
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
