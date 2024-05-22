import NavBar from "@/components/navbar"
import Setings from "@/components/setings"

export default function Layout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Setings />
        {children}
        <NavBar />
      </section>
    )
}