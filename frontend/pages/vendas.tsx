import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">NFTInnovators - Hackathon Nearx</span>
            <span className="block text-4xl font-bold">Descubra nossos talentosos artistas e criadores que podem se registrar em nosso sistema para vender suas NFTs de forma rápida e segura</span>
          </h1>
          <div className="overflow-x-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-primary-content">Detalhes sobre os nossos criadores de NFT</h2>{" "}
            <br />

          </div>

        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div>
            <Image alt="SE2 logo" fill src="/tela2.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
