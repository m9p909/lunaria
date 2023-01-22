import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

import { api } from "../utils/api";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import GoalPage from "../components/goal";
import { useRouter } from "next/router";
import { useRedirectIfNotLoggedIn } from "../hooks/useRedirectIfNotLoggedIn";
import { useTypesafeAnimate } from "../hooks/typesafeUseAnimate";
import { LoadingFlower } from "../components/loadingFlower";



const Home: NextPage = () => {
  useRedirectIfNotLoggedIn()
  const goal = api.goal.getGoal.useQuery()
  const [isFirstLoad, setIsFirstLoad] = useState(false)
  const [parent, enableAnimation] = useTypesafeAnimate()


  useEffect(() => {
    if (!goal.isLoading && !goal.data) {
      setIsFirstLoad(() => true)
    }
  }, [goal])

  const DetermineWhatToRender = (isLoading: boolean, isFirstLoad: boolean) => {
    if(isLoading){
      return <div className=""><LoadingFlower/></div>
    }
    if(isFirstLoad){
      return <GoalPage onGoalCreate={() => {
        void goal.refetch()
        setIsFirstLoad(() => false)
      }}></GoalPage>
    }
    return <div className="text-white">Plant Page</div>
  }

  return (
    <section>
      <Head>
        <title>Lunaria</title>
        <meta name="description" content="Lunaria thing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col">
        <Layout>
            <div ref={parent as React.RefObject<HTMLDivElement>} className="flex justify-center w-full h-screen">
              {DetermineWhatToRender(goal.isLoading, isFirstLoad)}
            </div>
        </Layout>   
      </section>
    </section>
  );
};

export default Home;

