import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import HomeBackGroundImage from "../assets/blue-back.jpg";
import PersonPic from "../assets/profile-pic-2.png";
import PdfUrl from "../assets/CV_Maedeh-V15-wp.pdf";
// import {ReactComponent as GitHubIcon} from "../assets/icons8-github.svg";
function Home() {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = PdfUrl;
    anchor.download = "Maedeh_Alirezaei-CV.pdf";
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  };
  return (
    <Box
      backgroundImage={HomeBackGroundImage}
      backgroundSize={"cover"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={"100vh"}
      width={"100wh"}
      p={128}
    >
      <Grid alignItems={"center"} templateColumns="repeat(2, 1fr)" gap={32}>
        <GridItem>
          <Image
            objectFit="cover"
            src={PersonPic}
            alt="Maedeh_Tehrani"
            boxShadow="2xl"
            borderRadius={"full"}
          />
        </GridItem>
        <GridItem>
          <Heading>Maedeh Alirezaei Tehrani</Heading>
          <Text mt={4} textAlign={"justify"}>
            Front End Developer with a background in fast-paced startup
            environments and FinTech. With a tendency for growth, ready to
            leverage in developing and launching web applications, components,
            platforms, and forms to drive user interaction and data validation
            in innovative banking applications. Able and willing to work in
            cross-disciplinary teams of Tech members, finance experts, and
            non-tech professionals.
          </Text>
          <Button colorScheme="teal" size="sm" mt={8} onClick={handleDownload}>
            Download CV
          </Button>
          {/* <Button leftIcon={<GitHubIcon/>} colorScheme="teal" ml={4}>
            Settings
          </Button> */}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;
