import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

import { api } from "../utils/api";
import { Layout } from "../components/Layout";
import { useEffect, useState, useCallback } from "react";
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
  const utils =api.useContext()
  const [isFirstLoad, setIsFirstLoad] = useState(false)
  const [parent, enableAnimation] = useTypesafeAnimate()


  useEffect(() => {
    if (goal.isSuccess && goal.data == null) {
      setIsFirstLoad(() => true)
    }
  }, [goal])

  const DetermineWhatToRender = useCallback(() => {
    if(goal.isLoading){
      return <div className=""><LoadingFlower/></div>
    }
    if(isFirstLoad){
      return <GoalPage onGoalCreate={() => {
        
        goal.refetch().then(() => {
          setIsFirstLoad(() => false)
        }).catch((e) => {
          console.log(e)
        })
      }}></GoalPage>
    }
    return <div>Plant Page</div>

  }, [goal.isLoading, isFirstLoad, utils.goal]);

  return (
    <>
      <Head>
        <title>Lunaria</title>
        <meta name="description" content="Lunaria thing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div ref={parent as React.RefObject<HTMLDivElement>} className="flex justify-center w-full h-screen">
          {DetermineWhatToRender()}
        </div>
      </Layout>

    </>
  );
};

export default Home;

