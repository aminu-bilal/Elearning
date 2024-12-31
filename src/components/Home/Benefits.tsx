import { Colors } from "../../globalStyles/colors";
import { fontSizes, fontWeights } from "../../globalStyles/Theme";
import {
  Box,
  Flex,
  Span,
  Button,
} from "../../globalStyles/customizableGlobalStyles";
import arrowupIcon from "../../assets/arrowupIcon.svg";
import { useEffect, useState } from "react";

const Benefits = () => {
  // Initialize state for storing benefits data
  const [benefits, setBenefits] = useState<Array<any>>([]);
  // useState is used to create a state variable 'benefits' initialized as an empty array.
  // 'setBenefits' is the function used to update the 'benefits' state.

  useEffect(() => {
    // This function is used to fetch the data from the json file
    const fetchData = async () => {
      // The fetch function is used to make a GET request to the json file
      const res = await fetch("src/components/Data/db.json");
      // The json() method is used to parse the response as JSON
      const data = await res.json();
      // The setBenefits function is used to update the benefits state with the data
      setBenefits(data.Benefits);
    };

    // The fetchData function is called when the component is mounted
    fetchData();
  }, []);

  return (
    <>
      <Box m="0 0 100px 0">
        <Flex display="flex" direction="column" gap="60px" m="0 60px">
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
                Benefits
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
          <Flex display="flex" wrap="wrap" gap="20px" justifyContent="center">
            {benefits.map((item) => (
              <Flex
                width="395px"
                display="flex"
                direction="column"
                p="30px"
                gap="30px"
                key={item.id}
                bgColor={Colors.white}
                borderRadius="12px"
              >
                <Span
                  display="flex"
                  justifyContent="right"
                  fontSize="60px"
                  fontWeight={fontWeights.bold}
                  color={Colors.GreyShades15}
                >
                  {item.Header}
                </Span>
                <Flex display="flex" direction="column" gap="10px">
                  <Span
                    fontSize={fontSizes.Sxl}
                    fontWeight={fontWeights.semibold}
                    color={Colors.GreyShades15}
                  >
                    {item.Title}
                  </Span>
                  <Span
                    fontSize="16px"
                    fontWeight={fontWeights.normal}
                    color={Colors.GreyShades60}
                  >
                    {item.Description}
                  </Span>
                </Flex>
                <Flex display="flex" justifyContent="right">
                  <Span
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p="20px"
                    bgColor={Colors.WhiteShades99}
                    border={`1px solid ${Colors.WhiteShades95}`}
                    borderRadius="8px"
                    width="55px"
                    height="55px"
                  >
                    <img src={arrowupIcon} alt="" />
                  </Span>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Benefits;
