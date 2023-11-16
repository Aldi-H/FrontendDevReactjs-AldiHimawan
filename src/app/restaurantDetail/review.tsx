import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

const DetailPage = () => {
  return (
    <Box>
      <Box>
        <StarRatings
          rating={(5 / 10) * 5}
          numberOfStars={5}
          starDimension="24px"
          starSpacing="1px"
          starRatedColor="yellow"
        />
      </Box>
      <HStack spacing={4} mt={3}>
        <Box>
          <Image
            src="https://images.tokopedia.net/img/cache/100-square/default_v3-usrnophoto.png.webp?ect=4g"
            alt="reviewer image"
            borderRadius="full"
            w="32px"
            h="32px"
          />
        </Box>
        <Box fontWeight="bold" letterSpacing="wide" fontSize="md">
          Username
        </Box>
      </HStack>

      <Box mt={3}>
        <Text as="span">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Box>

      <Box mt={4}>
        <Image
          src="https://placehold.co/240x240/png"
          alt="Restaurant Image"
          height={24}
          width={24}
        />
      </Box>
    </Box>
  );
};

export default DetailPage;
