"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

type RestaurantCardProps = {
  title: string;
  rating: number;
  category: string;
  imageUrl: string;
  openStatus: string;
  isOpen: boolean;
  price: number;
  href: string;
};

const RestaurantCard = ({
  title,
  rating,
  category,
  imageUrl,
  openStatus,
  isOpen,
  price,
  href,
}: RestaurantCardProps) => {
  return (
    <Card variant="unstyled">
      <CardBody>
        <Image
          src={imageUrl}
          alt="Restaurant Image"
          objectFit="cover"
          height={40}
          width={60}
        />

        <Stack mt={4} spacing={2}>
          <Text>{title}</Text>

          <StarRatings
            // rating={(rating / 10) * 5}
            rating={rating}
            numberOfStars={5}
            starDimension="16px"
            starSpacing="1px"
            starRatedColor="yellow"
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
                {category} &bull; {"$".repeat(price)}
              </Box>
            </Box>

            <Box
              as="span"
              color="gray.600"
              fontSize="sm"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Text fontSize={24} color={isOpen ? "green" : "red"}>
                ●
              </Text>
              {openStatus}
            </Box>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter mt={6}>
        <Link width="full" href={href}>
          <Button width="full" colorScheme="blue">
            LEARN MORE
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
