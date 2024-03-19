import { Box } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
import React from "react";

interface CarouselProps {
  children: React.ReactNode[];
}

export default function Carousel(props: CarouselProps) {
  const { children } = props;

  const [emlaRef] = useEmblaCarousel();
  return (
    <Box className="embla-wrap" ref={emlaRef} overflow="hidden">
      <Box className="embla-container" display={"flex"}>
        {children.map((child) => (
          <Box className="embla-slide" minW={0} flex="0 0 100%">
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
