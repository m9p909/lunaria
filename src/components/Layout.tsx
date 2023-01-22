import NavBar from "./NavBar"

type Props = {
    children?: React.ReactNode
  };

const Layout: React.FC<Props> = ({children}) => {

    return <section className="flex flex-row"><NavBar></NavBar>
        {children}
    </section>
}

export {Layout}