import NavBar from "@/components/navbar"

export default function Layout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <section className="md:flex flex-row justify-between items-center w-full">
        <NavBar />
        {children}
      </section>
    )
}