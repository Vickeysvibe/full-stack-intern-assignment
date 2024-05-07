import { HomePage } from "@/components/HomePage";
import bg from "../public/bg.png";
import Image from "next/image";
export default function Home() {
  return (
    <div className="home">
      {/* <Image className="img" src={bg} alt="logo" /> */}
      <div className="bg"></div>
      <HomePage />
    </div>
  );
}
