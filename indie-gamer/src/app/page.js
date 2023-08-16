import Heading from "@/app/component/Heading";
import Link from "next/link";
import Image from 'next/image';


export default function Home() {

  return (
   <div>
<Heading>India Gamer</Heading>
<p>
  Only the best Indie Games,reviewed for you.
</p>

<div className="border  bg-white hover:shadow-x sm:w-full">
          <Link href={"/reviews/stardew-valley"} className="flex flex-col sm:flex-row">
       <img src="/images/stardew-valley.jpg" alt="" width={"340"} height={"180"} className=" mb-2 rounded sm:rounded-t" />
       <h2 className="py-1 text-center font-orbitron sm:px-2 "> Stardew Valley</h2>
       </Link>
          </div>
   </div>
  )
}
