import { Colors } from "../../globalStyles/colors";
import { fontSizes, fontWeights } from "../../globalStyles/Theme";
import {
  Box,
  Flex,
  Span,
  Button,
} from "../../globalStyles/customizableGlobalStyles";
import flashIconContainer from "../../assets/flashIconContainer.svg";
import AbstractLine from "../../assets/AbstractLine.svg";
import Logo1 from "../../assets/Logo1.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";
import Logo4 from "../../assets/Logo4.svg";
import Logo5 from "../../assets/Logo5.svg";
import Logo6 from "../../assets/Logo6.svg";
import Logo7 from "../../assets/Logo7.svg";
import homeContainer from "../../assets/homeImage.svg";

const Hero = () => {
  return (
    <>
      <Box>
        <Flex
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          gap="50px"
          m="80px 0 0 0"
        >
          <Flex
            display="flex"
            direction="column"
            gap="16px"
            justifyContent="center"
            alignItems="center"
          >
            <Flex position="relative">
              <Flex position="absolute" top="-30px" left="-26px">
                <img src={AbstractLine} alt="Abstract Line" />
              </Flex>
              <Flex
                display="flex"
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="8px"
                borderRadius="8px"
                bgColor={Colors.WhiteShades99}
                p="12px 24px 12px 12px"
              >
                <img
                  src={flashIconContainer}
                  alt="Flash icon in a container"
                  width={48}
                  height={48}
                />
                <Span
                  color={Colors.OrangeShades50}
                  fontSize={fontSizes.Sxl4}
                  fontWeight={fontWeights.semibold}
                >
                  Unlock
                </Span>
                <Span
                  fontSize={fontSizes.Sxl4}
                  fontWeight={fontWeights.semibold}
                >
                  Your Creative Potential
                </Span>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Span
                fontSize={fontSizes.xl}
                fontWeight={fontWeights.medium}
                lineHeight="normal"
              >
                with Online Design and Development Courses.
              </Span>
              <Span
                m="12px 0"
                fontSize={fontSizes.smallbase}
                fontWeight={fontWeights.normal}
              >
                Learn from Industry Experts and Enhance Your Skills.
              </Span>
            </Flex>
          </Flex>
          <Flex display="flex" direction="row" gap="12px">
            <Button>Explore Courses</Button>
            <Button>View Pricing</Button>
          </Flex>
        </Flex>
        <Flex
          bgColor={Colors.WhiteShades99}
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p="24px"
          m="100px 60px 80px 60px"
          borderRadius="8px"
          border={`1px solid ${Colors.WhiteShades95}`}
        >
          <Flex p="20px 30px">
            <img src={Logo1} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo2} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo3} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo4} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo5} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo6} alt="Logo" />
          </Flex>
          <Flex
            height="72px"
            style={{ borderRight: `1px solid ${Colors.WhiteShades95}` }}
          ></Flex>
          <Flex p="20px 30px">
            <img src={Logo7} alt="Logo" />
          </Flex>
        </Flex>
        <Flex
          display="flex"
          justifyContent="center"
          alignItems="center"
          m="0 60px 100px 60px"
        >
          <img src={homeContainer} alt="Home" width={1244} />
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
