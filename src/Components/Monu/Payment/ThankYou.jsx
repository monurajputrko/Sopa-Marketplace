import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Thankyou() {
  const navigate = useNavigate();
  const [sec, setsec] = useState(5);
  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setsec((pre) => pre - 1);
    }, 1000);

    ref2.current = setTimeout(() => {
      navigate("/");
    }, 6000);

    return () => {
      clearInterval(ref.current);
      clearTimeout(ref2.current);
    };
  }, []);

  return (
    <Flex
      h={"100vh"}
      bg={"gray.200"}
      py={"60px"}
      backgroundImage="url('https://previews.123rf.com/images/eigens/eigens1907/eigens190701253/127450654-light-gray-medium-turquoise-and-khaki-color-brushed-painting-artistic-artwork-for-use-as.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      justifyContent={"space-around"}
      align={"center"}
    >
      <Flex
        my={"auto"}
        borderRadius={"15px"}
        px={"50px"}
        boxShadow={"md"}
        bg={"white"}
        h={"75vh"}
        w={"70%"}
        mx={"auto"}
        justifyContent={"space-around"}
        align={"center"}
      >
        <Box>
          <Image src="https://shrtco.de/utnitI" w={"70px"} m={"auto"} />
          <Text
            textAlign={"Center"}
            fontSize={"40px"}
            fontWeight={"700"}
            fontFamily={"unset"}
            color={"green.500"}
          >
            Order Confirmed !
          </Text>
          <Text color={"gray.500"} textAlign={"Center"}>
            This page will be automatically redirected to
            <br />
            <Link to={"/"}>
              {" "}
              <Text as={"span"} color="blue.400">
                Home page
              </Text>
            </Link>{" "}
            after {sec} sec.
          </Text>
        </Box>
        <Image
          display={{ base: "none", md: "inline-block" }}
          borderLeft={"2px dashed silver"}
          w={"40%"}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAhFBMVEX///94s0h2skX///10sUJxrz1zrz/6/fd2sEKFt1h4skTV5sT4+/Tw9uj4+/Nyrj2vzpK10ZnG3LCAtFK71aJ4sUh3r0bM4LjA2arX58fk79fb6MugxX6UvnCOvGWJvF2YwXTN4Luxz5WmyIehxoCIt1zi7dWLumLr8+Lx9+ytz46RvGrzFgj6AAAEnElEQVR4nO3c63aiPBQGYA0hhjCKigiKB6yHar3/+/sIaGcUkFP7ZQXf5+es+UF2d/bOqe31AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADejTH4M4oNDNUfosZgGPqT1Xqz3W4/r9F4ap9Hqj/p/3WxZ9HcNE1KiRCCEMpMx9mM/fPbJMTyy4qH339GTNNb7d4hGwx745gkE4Ab6rizi+pP/GWGb/HCACQE8yZD1Z/5m05RSQSSOUEtf6D6S3/LaDKnQpTGIJ4RfLVU/bG/Y7lm5Ulw47h+F1vEzuJVIxBXBcE/ujcfggqV4DEVoq61yQ+nXgRibNOt/rB3qtTCJ9Tq0FLBmBSvil4G4dqdIEx5gyxIgnD4o/rbf8jCa5QFEpt0o0WercYh6Pf5TvXn/wTjwJqHoC/cs+oB/ICgxtIoJwYs0n82DN0WM0Gi+s+Gr+xhSc0YHHVfLy7rLpGz2Ez1IFraV98rFiGu3olwbtMT7syp6mG0MjHr/9iz/2LpvI0euV7tEHjZKJih6oG0sKudBmJuL4/PKwpzr+8awTjUbYyE+b3e6XlJISx9TxKGdXcKlMnyt8tMIGarHkpjYc1lMvHSEGQixyaqh9JYza4guAyBPc8eNpC1rp3BiGqVAzKXIfBzQhAvk3QtCKPPOuWAOHE57O3y15Vc1+54rrNlpDwJQcH2wvRVD6ahOiXRI3KUftHBI/1QPZiGdtU3CyTJArvw4JHuVQ+moaByDAgPerlN8TsGkaaNoXJrFEkIFnkd4R6kja4xqJgHaRYsvBeXEOSqawzy8mAunhOeJAtk++WBk755kI0B4bPwsWN6aTkMX5+5aZsHs+xc4DOjd3osfU6SBSVXUVzXmujnx+AhCPdaULKaogdNTxAWOTUxCUL4PWRCkhCULijpWPVgGspdKzMZhHvqE0+GoGwi9G8TRkeXbXZsXnpdcBt2MhHsefm2gi1UD6ahwTV37+zIIISyRTrJRKhyC+Np+1ZvnL9IMuV0iJdESRaUNMWU+NT2miWvKEo0kDWBBw/l8RWm65YpLooFAyRMDl+md3lHSGhbEuOCsC44TCPzIPkPYbUQCH3LQbx7Ltg5ekTIn2zFEOi7c5bOhS8zBQviWlDxuZrel66r4pNl9lVhXZDiWj9TXLw4RqFVHy2aui6UU8am9ROMOA00f5rm13+A8IweVA+ipUH7RJhr3BhTYdt3aUzXq4V/tHqmKq8atW4KqeGx4aP1Wwx0vWV7YLepCOZY00O0R8as/u/x3NF1B2aCNFo1LQnE0r4n3F3yD5RKCU/XZwc5hlaTIBBH11PEXOdj/SCkF1AdcrnWXTRTt1NZII32tFaPZJ+dKYd/DQKv+nwg7KD5ZrFAuKn6q57UCzQ+PXvp8lElFQThUQfnwbfT2imLAmHutBPr42JhxF7NCG4efW3vlKpbjl2W2yMINfnK7moheHKx9xaTfyCK/B0+NR03mr7PH4mK95Kj5XS/3roeZ6bDhWddV7Pw8iYp8A9jcDmfFnYsXA7f9c/GAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD7+g9MOz0nINerXQAAAABJRU5ErkJggg=="
        />
      </Flex>
    </Flex>
  );
}

export default Thankyou;