
import { signIn,  useSession } from "next-auth/react";
import { useRouter } from "next/router";
const LoginButton = () => {

return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => void signIn()}> Login</button>
}

const LoginPage = () => {
    const session = useSession()
    const router = useRouter()
    if(session.data?.user){
        void router.push("/")
    }

    return <div className="flex justify-center h-screen items-center bg-[#E5FFF8]">
        <div className="h-1/2">
            <div>
                <span className="text-5xl">Login to Lunaria</span>
            </div>
            <div className="text-center">
            <LoginButton></LoginButton>
</div>
        </div>
    </div>
}

export default LoginPage