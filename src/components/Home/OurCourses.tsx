import { Colors } from "../../globalStyles/colors";
import { fontSizes, fontWeights } from "../../globalStyles/Theme";
import {
  Box,
  Flex,
  Span,
  Button,
} from "../../globalStyles/customizableGlobalStyles";
import { useEffect, useState } from "react";

const OurCourses = () => {
  const [courses, setCourses] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("src/components/Data/db.json");
      const data = await res.json();
      setCourses(data.Courses);
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
                Our Courses
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
            {courses.map((course) => (
              <Flex
                display="flex"
                direction="column"
                width="603px"
                p="40px 40px"
                bgColor={Colors.white}
                border={`1px solid ${Colors.WhiteShades95}`}
                borderRadius="10px"
                gap="24px"
              >
                <Flex
                  key={course.id}
                  gap="24px"
                  display="flex"
                  direction="column"
                >
                  <img src={course.Image} alt=" Course Image" width="100%" />
                  <Flex display="flex" direction="column" gap="20px">
                    <Flex
                      display="flex"
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Flex display="flex" direction="row" gap="10px">
                        <Span
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          bgColor={Colors.white}
                          border={`1px solid ${Colors.WhiteShades95}`}
                          borderRadius="6px"
                          p="8px 14px"
                          width="90px"
                          height="2.5rem"
                        >
                          {course.Duration}
                        </Span>
                        <Span
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          bgColor={Colors.white}
                          border={`1px solid ${Colors.WhiteShades95}`}
                          borderRadius="6px"
                          p="8px 14px"
                          width="130px"
                          height="2.5rem"
                        >
                          {course.Level}
                        </Span>
                      </Flex>
                      <Span
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        fontSize={fontSizes.smallbase}
                        fontWeight={fontWeights.normal}
                        color={Colors.GreyShades15}
                      >
                        {course.Author}
                      </Span>
                    </Flex>
                    <Flex display="flex" direction="column" gap="10px">
                      <Span
                        fontSize={fontSizes.lg}
                        fontWeight={fontWeights.semibold}
                        color={Colors.GreyShades15}
                      >
                        {course.Title}
                      </Span>
                      <Span
                        fontSize={fontSizes.smallbase}
                        fontWeight={fontWeights.normal}
                        color={Colors.GreyShades30}
                      >
                        {course.Description}
                      </Span>
                    </Flex>
                  </Flex>
                </Flex>
                <Span
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgColor={Colors.WhiteShades97}
                  border={`1px solid ${Colors.WhiteShades95}`}
                  p="14px 24px"
                  borderRadius="6px"
                  height="2.5rem"
                  width="100%"
                >
                  Get it Now
                </Span>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default OurCourses;
