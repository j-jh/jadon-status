import Head from 'next/head';
import Landing from "@/Components/Landing";

export default function Home() {
  const styleStuff = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  };
  return (
    <>
      <Head>
        <title>Jadon's Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={styleStuff}>
        <Landing />
      </div>
    </>
  );
}
