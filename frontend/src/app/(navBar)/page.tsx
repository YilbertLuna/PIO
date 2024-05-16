import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-color1 w-full ">
      <div className="flex flex-col items-center h-lvh space-y-20">
        <figure className="mt-10">
          <Image src="/PIO_Blanco.png" alt="PIO logo" width={100} height={100} />
        </figure>

        <div>
          publicaciones de los usuarios
        </div>
      </div>
    </main>
  );
}
