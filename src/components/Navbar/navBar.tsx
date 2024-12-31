import { Colors } from "../../globalStyles/colors";
import { fontFamilies, fontSizes, fontWeights } from "../../globalStyles/Theme";
import {
  Box,
  Flex,
  Span,
  Button,
} from "../../globalStyles/customizableGlobalStyles";
import arrowRight from "../../assets/arrowRight.svg";
import eLogo from "../../assets/eLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box width="100%" fontFamily={fontFamilies.main}>
        <Flex
          //width="100%"
          height="41px"
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="23px"
          bgColor={Colors.OrangeShades50}
          borderRadius="6px"
          m="0px 8px"
        >
          <Span
            textAlign="center"
            color={Colors.white}
            fontSize={fontSizes.sm}
            fontWeight={fontWeights.normal}
          >
            Free Courses 🌟 Sale Ends Soon, Get It Now
          </Span>
          <img src={arrowRight} alt="Arrow" />
        </Flex>
        <Flex
          p="16px 60px 20px 60px"
          display="flex"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="auto"
        >
          <Flex display="flex" direction="row" gap="50px">
            <img src={eLogo} alt="Logo" height={44} width={44} />
            <Flex display="flex" direction="row" gap="26px">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Button disable={true} color={Colors.black}>
                  Home
                </Button>
              </Link>
              <Link to={"/courses"} style={{ textDecoration: "none" }}>
                <Button disable={true} color={Colors.black}>
                  Courses
                </Button>
              </Link>
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <Button disable={true} color={Colors.black}>
                  About Us
                </Button>
              </Link>
              <Link to={"/pricing"} style={{ textDecoration: "none" }}>
                <Button disable={true} color={Colors.black}>
                  Pricing
                </Button>
              </Link>
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <Button disable={true} color={Colors.black}>
                  Contact
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex display="flex" direction="row" gap="20px">
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              <Button disable={true} color={Colors.black}>
                Sign Up
              </Button>
            </Link>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button width="5.5rem">Login</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default NavBar;
