import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Home: NextPage = () => {
  const session = useSession()
  const goal = api.goal.getGoal.useQuery()
  const [isFirstLoad, setIsFirstLoad] = useState(false)


  useEffect(() => {
    if (!goal.isLoading && !goal.data) {
      setIsFirstLoad(() => true)
    }
  }, [goal])

  const DetermineWhatToRender = (isLoading: boolean, isFirstLoad: boolean) => {
    if(isLoading){
      return <CircleLoader/>
    }
    if(isFirstLoad){
      return <div className="text-white">Goal</div>
    }
    return <div className="text-white">Plant Page</div>

  }

  return (
    <>
      <Head>
        <title>Lunaria</title>
        <meta name="description" content="Lunaria thing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          {DetermineWhatToRender(goal.isLoading, isFirstLoad)}

        </main>
      </Layout>

    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    {
      enabled: sessionData?.user !== undefined
    },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
