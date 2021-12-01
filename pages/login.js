import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import spotifyIcon from "../public/images/spotify.png";

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <div className="mb-5">
        <Image width={200} height={200} src={spotifyIcon} alt="spotify" />
      </div>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D868] text-white p-5 rounded-full"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;
