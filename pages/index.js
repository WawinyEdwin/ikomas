import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Carousel />
        <Card />

        <br />
        <hr />
        <Recommend />
        <Footer />
      </div>
    </>
  );
}
