import { Colors } from "../../globalStyles/colors";
import { fontSizes, fontWeights } from "../../globalStyles/Theme";
import {
  Box,
  Flex,
  Span,
  Button,
} from "../../globalStyles/customizableGlobalStyles";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("src/components/Data/db.json");
      const data = await res.json();
      setTestimonials(data.Testimonials);
    };
    fetchData();
  });

  return (
    <>
      <Box>
        <Flex
          display="flex"
          direction="column"
          gap="60px"
          m="0 60px 100px 60px"
        >
          <Flex
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="end"
          >
            <Flex display="flex" direction="column" gap="10px">
              <Span
                fontSize={fontSizes.xl4}
                fontWeight={fontWeights.semibold}
                color={Colors.GreyShades15}
              >
                Our Testimonials
              </Span>
              <Span
                fontSize={fontSizes.smallbase}
                fontWeight={fontWeights.normal}
                color={Colors.GreyShades35}
                width="880px"
              >
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </Span>
            </Flex>
            <Button
              justifyContent="end"
              fontSize={fontSizes.sm}
              bgColor={Colors.white}
              color={Colors.black}
            >
              View All
            </Button>
          </Flex>
          <Flex display="flex" wrap="wrap" gap="20px">
            {testimonials.map((testimonial) => (
              <Flex
                display="flex"
                direction="column"
                bgColor={Colors.white}
                width="600px"
                borderRadius="10px"
              >
                <Span display="flex" padding="40px">
                  {testimonial.Description}
                </Span>
                <Flex
                  display="flex"
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  p="24px 40px"
                  bgColor={Colors.WhiteShades99}
                >
                  <Flex
                    display="flex"
                    direction="row"
                    gap="10px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img src={testimonial.Image} alt="Image" />
                    <Span>{testimonial.Name}</Span>
                  </Flex>
                  <Button width="fit-content">Read Full Story</Button>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Testimonials;
