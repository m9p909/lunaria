import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

const useRedirectIfNotLoggedIn = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
  if(!(session.status === "loading") && !session.data?.user){
    void router.push("/login")
  }
  }, [session, router])

}

export {useRedirectIfNotLoggedIn}