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
            <table className="table table-zebra w-full shadow-lg">
              <thead>
                <tr>
                  <th className="bg-primary">Foto</th>
                  <th className="bg-primary">Nome</th>
                  <th className="bg-primary">Chave ID</th>
                  <th className="bg-primary">Vendas</th>
                  <th className="bg-primary text-end">Sobre </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex relative w-10 h-10">
                      <Image alt="SE2 logo" className="card" fill src="/avatar_1.png" />
                    </div>
                  </td>
                  <td>
                    <strong>@jimena_stark</strong>
                  </td>
                  <td>
                    <strong>1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</strong>
                  </td>
                  <td>
                    <strong>8</strong>
                  </td>
                  <td>
                    I make art with the simple goal of giving you something pleasing to look at for a few seconds.
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="flex relative w-10 h-10">
                      <Image alt="SE2 logo" className="card" fill src="/avatar_2.png" />
                    </div>
                  </td>
                  <td>
                    <strong>@ayoub fennouni</strong>
                  </td>
                  <td>
                    <strong>1LqBGSKuX5yYUonjxT5qGfpUsXKYYWeabA</strong>
                  </td>
                  <td>
                    <strong>24</strong>
                  </td>
                  <td>
                  Expressões Digitais Vibrantes: Criador NFT em Ação




                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="flex relative w-10 h-10">
                      <Image alt="SE2 logo" className="card" fill src="/avatar_3.png" />
                    </div>
                  </td>
                  <td>
                    <strong>@jaxon_duffy</strong>
                  </td>
                  <td>
                    <strong>1JfbZRwdDHKZmuiZgYArJZhcuuzuw2HuMu</strong>
                  </td>
                  <td>
                    <strong>1</strong>
                  </td>
                  <td>
                  Criatividade Digital em NFTs para Inspirar Conexões
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="flex relative w-10 h-10">
                      <Image alt="SE2 logo" className="card" fill src="/avatar_4.png" />
                    </div>
                  </td>
                  <td>
                    <strong>@Majin_Boo</strong>
                  </td>
                  <td>
                    <strong>1GqaihzhS33G4kt7VKJ7UEL1ENaHazRS2k</strong>
                  </td>
                  <td>
                    <strong>55</strong>
                  </td>
                  <td>
                  Explorando Arte Digital por meio de NFTs
                  </td>
                </tr>


              </tbody>
            </table>
          </div>

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
