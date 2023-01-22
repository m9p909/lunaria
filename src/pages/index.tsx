import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

import { api } from "../utils/api";
import { Layout } from "../components/Layout";
import { useEffect, useState, useCallback } from "react";
import GoalPage from "../components/goal";
import { useRedirectIfNotLoggedIn } from "../hooks/useRedirectIfNotLoggedIn";
import { useTypesafeAnimate } from "../hooks/typesafeUseAnimate";
import { LoadingFlower } from "../components/loadingFlower";
import FlowerProgress from "../components/FlowerProgress";
import { PlantPage } from "../components/PlantPage";



const Home: NextPage = () => {
  useRedirectIfNotLoggedIn()
  const goal = api.goal.getGoal.useQuery()
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

    if(goal.data){
     return <div><PlantPage goal={goal.data} onContribute={() => {
      if(!goal.isRefetching && !goal.isLoading){
        goal.refetch().catch((e)=> {
        console.error(e)
      })
      }

     }}></PlantPage></div>
    }
    return null

  }, [goal, isFirstLoad]);

  return (
    <section>
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
      
    </section>
  );
};

export default Home;

