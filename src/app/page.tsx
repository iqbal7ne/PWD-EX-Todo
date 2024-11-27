import { Footer } from "@/component/footer";
import { Header } from "@/component/header";
import { Job } from "@/component/job";
import Image from "next/image";

export default function Home() {
  return (
    <div id="page">
      <div id="header">
        <Header />
      </div>
      <div id="job">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
      <hr></hr>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
