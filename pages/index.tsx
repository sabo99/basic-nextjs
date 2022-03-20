import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/vercel.svg" width={200} height={200} alt="vercel" />
      <h1>Welcome Home</h1>
    </Layout>
  );
};

export default Home;
