import { Colors } from "../../globalStyles/colors";
import { fontSizes, fontFamilies, fontWeights } from "../../globalStyles/Theme";
import { Box, Flex, Span } from "../../globalStyles/customizableGlobalStyles";
import eLogo from "../../assets/eLogo.svg";
import mailIcon from "../../assets/mailIcon.svg";
import callIcon from "../../assets/callIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";

const Footer = () => {
  return (
    <>
      <Box fontFamily={fontFamilies.main} m="100px 60px 5px 60px">
        <Flex display="flex" direction="row" justifyContent="space-between">
          <Flex display="flex" direction="column" gap="30px">
            <img src={eLogo} alt="Logo" width={44} height={44} />
            <Flex
              display="flex"
              direction="column"
              gap="14px"
              fontSize={fontSizes.smallbase}
              fontWeight={fontWeights.normal}
            >
              <Span
                display="flex"
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap="4px"
              >
                <img src={mailIcon} alt="Mail" /> aminubillu@gmail.com
              </Span>
              <Span
                display="flex"
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap="4px"
              >
                <img src={callIcon} alt="Call" /> +234 903 525 1372
              </Span>
              <Span
                display="flex"
                direction="row"
                justifyContent="start"
                alignItems="center"
                gap="4px"
              >
                <img src={locationIcon} alt="Location" /> Abuja Nigeria
              </Span>
            </Flex>
          </Flex>

          <Flex display="flex" direction="row" gap="7.5rem">
            <Flex display="flex" direction="column" gap="10px">
              <Span
                fontSize={fontSizes.base}
                fontWeight={fontWeights.semibold}
                color={Colors.GreyShades15}
              >
                Home
              </Span>
              <Flex
                display="flex"
                direction="column"
                gap="8px"
                color={Colors.GreyShades35}
                fontSize={fontSizes.smallbase}
                fontWeight={fontWeights.normal}
              >
                <Span>Benefits</Span>
                <Span>Our Courses</Span>
                <Span>Our Testimonials</Span>
                <Span>Our FAQ</Span>
              </Flex>
            </Flex>
            <Flex display="flex" direction="column" gap="10px">
              <Span
                fontSize={fontSizes.base}
                fontWeight={fontWeights.semibold}
                color={Colors.GreyShades15}
              >
                About Us
              </Span>
              <Flex
                display="flex"
                direction="column"
                gap="8px"
                color={Colors.GreyShades35}
                fontSize={fontSizes.smallbase}
                fontWeight={fontWeights.normal}
              >
                <Span>Company</Span>
                <Span>Achievements</Span>
                <Span>Our Goals</Span>
              </Flex>
            </Flex>
            <Flex display="flex" direction="column" gap="10px">
              <Span
                fontSize={fontSizes.base}
                fontWeight={fontWeights.semibold}
                color={Colors.GreyShades15}
              >
                Social Profiles
              </Span>
              <Flex display="flex" direction="row" gap="14px">
                <Span
                  bgColor={Colors.WhiteShades97}
                  width="44px"
                  height="44px"
                  border={`1px solid ${Colors.WhiteShades95}`}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="6px"
                >
                  <img src={facebookIcon} alt="" />
                </Span>
                <Span
                  bgColor={Colors.WhiteShades97}
                  width="44px"
                  height="44px"
                  border={`1px solid ${Colors.WhiteShades95}`}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="6px"
                >
                  <img src={twitterIcon} alt="" />
                </Span>
                <Span
                  bgColor={Colors.WhiteShades97}
                  width="44px"
                  height="44px"
                  border={`1px solid ${Colors.WhiteShades95}`}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="6px"
                >
                  <img src={linkedinIcon} alt="" />
                </Span>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          m="30px 0px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderTop={`1px solid ${Colors.WhiteShades95}`}
        >
          <Span
            color={Colors.GreyShades40}
            fontSize={fontSizes.sm}
            fontWeight={fontWeights.normal}
            textAlign="center"
            m="30px 0px 0px 0px"
          >
            &copy; 2025 Moisture Water's faith. All rights reserved.
          </Span>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
