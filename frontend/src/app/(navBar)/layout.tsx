import NavBar from "@/components/navbar"
import Setings from "@/components/setings"
import Image from "next/image"

export default function Layout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <figure className="hidden md:flex justify-center items-center md:ml-28 mt-10 ">
          <Image src="/PIO_Blanco.png" alt="PIO logo" width={80} height={80} />
        </figure>

        {children}
        
        <Setings />
        <NavBar />
      </section>
    )
}