import Contents from "@/components/layout/Contents";
import Curve from "@/components/layout/pageTransition";
import ContainerAccount from "@/containers/account/ContainerAccount";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export default function Account() {
  return (
    <Curve>
      <ContainerAccount />
    </Curve>
  );
}
