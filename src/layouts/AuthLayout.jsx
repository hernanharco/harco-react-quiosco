
import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-0 flex flex-col md:flex-row item-center">       

        <img
            src='../img/logo.svg'
            alt="imagen logotipo"
            className="max-w-xs"
        />

        <div className="p-10 w-auto">
            <Outlet/>
        </div>

    </main>
  )
}

export default AuthLayout