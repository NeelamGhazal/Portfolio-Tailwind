
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center">
      {/* <div className="w-64 h-64 rounded-full mb-8 relative overflow-hidden">
        <Image src="/images/Girl02.png" alt="Neelum" layout="fill" objectFit="cover" className="rounded-full" />
      </div> */}

<div className="w-64 h-64 rounded-full mb-8 relative overflow-hidden group">
  <Image 
    src="/images/Girl02.png" 
    alt="Neelum" 
    layout="fill" 
    objectFit="cover" 
    
    className="rounded-full transition-transform duration-700 ease-in-out group-hover:animate-[smoothHeartbeat_1.5s_infinite] cursor-pointer"
  />
</div>



      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Neelum
      </h1>
      <p className="text-xl mb-8 text-pink-200">
        Frontend Maestro | UI/UX Enthusiast | TypeScript Ninja | Responsive Design Expert
      </p>
      <div className="space-x-4">
        <Link
          href="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition-colors duration-300"
        >
          Let's Connect
        </Link>
        <Link
          href="/projects"
          className="bg-transparent hover:bg-purple-500 text-purple-400 hover:text-white px-6 py-2 rounded border border-purple-500 transition-colors duration-300"
        >
          Explore My Work
        </Link>
      </div>
    </section>
  )
}

