import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import Image2 from "next/image";
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">NFTInnovators - Hackathon Nearx</span>
            <span className="block text-4xl font-bold">Explore nossas NFTs exclusivas e adquira a sua agora mesmo</span>
          </h1>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex relative w-10 h-10" style={{ width: '200px', height: '150px' }}>
                <Image2 alt="SE2 logo" className="card" fill src="/item_1.png" />
              </div>
              <h2>
                <strong><em>Pop Art Painting</em></strong>
              </h2>
              <p>
                Colorful Abstract Painting <br />
                <strong>Price: <span style={{ color: 'green' }}>2.95 ETH</span></strong> <br />
                <Link href="/debug" passHref className="btn">
                  Comprar
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex relative w-10 h-10" style={{ width: '200px', height: '150px' }}>
                <Image2 alt="SE2 logo" className="card" fill src="/item_2.png" />
              </div>
              <h2>
                <strong><em>The girl with the firefly</em></strong>
              </h2>
              <p>
                Creative girl illustration <br />
                <strong>Price: <span style={{ color: 'green' }}>2.88 ETH</span></strong> <br />
                <Link href="/debug" passHref className="btn">
                  Comprar
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex relative w-10 h-10" style={{ width: '200px', height: '150px' }}>
                <Image2 alt="SE2 logo" className="card" fill src="/item_3.png" />
              </div>
              <h2>
                <strong><em>Ganso Dancing</em></strong>
              </h2>
              <p>
                couple Abstract Painting <br />
                <strong>Price: <span style={{ color: 'green' }}>4.56 ETH</span></strong> <br />
                <Link href="/debug" passHref className="btn">
                  Comprar
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex relative w-10 h-10" style={{ width: '200px', height: '150px' }}>
                <Image2 alt="SE2 logo" className="card" fill src="/item_4.png" />
              </div>
              <h2>
                <strong><em>Tabaco Girl</em></strong>
              </h2>
              <p>
                smoking Abstract Painting <br />
                <strong>Price: <span style={{ color: 'green' }}>7.89 ETH</span></strong> <br />
                <Link href="/debug" passHref className="btn">
                  Comprar
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <div className="flex relative w-10 h-10" style={{ width: '200px', height: '150px' }}>
                <Image2 alt="SE2 logo" className="card" fill src="/item_5.png" />
              </div>
              <h2>
                <strong><em>Woman Party</em></strong>
              </h2>
              <p>
              The girl with the firefly <br />
                <strong>Price: <span style={{ color: 'green' }}>0.11 ETH</span></strong> <br />
                <Link href="/debug" passHref className="btn">
                  Comprar
                </Link>{" "}
              </p>
            </div>
          </div>
         
          {/* sdasddas */}
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/nextjs/pages/index.tsx</code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract <code className="italic bg-base-300 text-base font-bold">YourContract.sol</code> in{" "}
            <code className="italic bg-base-300 text-base font-bold">packages/hardhat/contracts</code>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Experiment with{" "}
                <Link href="/example-ui" passHref className="link">
                  Example UI
                </Link>{" "}
                to build your own UI.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
