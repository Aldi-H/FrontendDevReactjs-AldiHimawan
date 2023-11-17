import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

type ReviewPageProps = {
  reviewerName: string;
  reviewText: string;
  reviewImage: string;
  reviewerRating: number;
};

const ReviewPage = ({
  reviewerName,
  reviewText,
  reviewImage,
  reviewerRating,
}: ReviewPageProps) => {
  return (
    <Box mt={4}>
      <Box>
        <StarRatings
          rating={reviewerRating}
          numberOfStars={5}
          starDimension="18px"
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
          {reviewerName}
        </Box>
      </HStack>

      <Box mt={3}>
        <Text as="span">{reviewText}</Text>
      </Box>

      <Box mt={4}>
        <Image
          src={reviewImage}
          alt="Restaurant Image"
          height={24}
          width={24}
        />
      </Box>
    </Box>
  );
};

export default ReviewPage;
