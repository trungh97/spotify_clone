import Sidebar from "components/Sidebar";
import Center from "components/Center";
import Player from "components/Player";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { currentTrackIdState } from "atoms/songAtom";

export default function Home() {
  const currentTrackId = useRecoilValue(currentTrackIdState);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      {currentTrackId && (
        <div className="sticky bottom-0">
          <Player />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
