import ContainerHome from "@/containers/ContainerHome";
import { Inter } from "next/font/google";
import Curve from "./../components/layout/pageTransition/index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Curve>
        <ContainerHome />
      </Curve>
    </>
  );
}
