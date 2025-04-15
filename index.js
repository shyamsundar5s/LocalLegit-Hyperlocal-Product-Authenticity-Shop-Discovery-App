import Head from 'next/head';
import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>LocalLegit</title>
      </Head>
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold">LocalLegit</h1>
        <p className="text-lg mt-4">Discover authentic local stores and verify products near you!</p>
        <div className="mt-8">
          <Map />
        </div>
      </main>
    </div>
  );
}
