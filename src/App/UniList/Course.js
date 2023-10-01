import React from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import Detail from "./Detail";
import Typography from "commons/components/Typography";
import Flexbox from "commons/components/Flexbox";

const Box = styled(Flexbox)`
  width: 100%;
`;

const levelMap = {
  "1inz": "I stopnia (inżynierskie)",
  "1lic": "I stopnia (licencjackie)",
  2: "II stopnia",
  "2jednolite": "Jednoliste magisterskie",
};

function Course({ className, course }) {
  return (
    <Box className={className} padding={16} isBordered flexDirection="column">
      {console.log(course)}
      <Typography variant="h3">{course.name}</Typography>

      <Flexbox gap={32} margin="12px 0 24px 0">
        <Detail
          variant="vertical"
          label="Poziom studiów"
          value={levelMap[course.level]}
        />
        <Detail
          variant="vertical"
          label="Tryb"
          value={course.stationary ? "Stacjonarne" : "Niestacjonarne"}
        />
        <Detail variant="vertical" label="Język" value={course.language} />
        <Detail
          variant="vertical"
          label="Mediana zarobków"
          value={course.earnings || "-"}
        />
      </Flexbox>

      <strong>Syllabus</strong>
      <Typography variant="paragraph">{course.description}</Typography>
    </Box>
  );
}

Course.propTypes = {
  className: T.string,
};

export default Course;
