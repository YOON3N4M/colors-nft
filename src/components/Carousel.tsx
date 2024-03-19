import { Box, Center } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface CarouselProps {
  children: React.ReactNode[];
  slidePerView?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function Carousel(props: CarouselProps) {
  const { children, slidePerView = 1, autoPlay = false, loop = false } = props;

  function handlePlugins() {
    const plugins = [];
    if (autoPlay) {
      plugins.push(Autoplay({ delay: 3000, stopOnInteraction: false }));
    }

    return plugins;
  }

  const [emlaRef] = useEmblaCarousel(
    {
      loop,
    },
    handlePlugins()
  );
  return (
    <Box className="embla-wrap" ref={emlaRef} overflow="hidden">
      <Box className="embla-container" display={"flex"}>
        {children.map((child) => (
          <Center
            className="embla-slide"
            minW={0}
            flex={`0 0 ${100 / slidePerView}%`}
          >
            {child}
          </Center>
        ))}
      </Box>
    </Box>
  );
}
