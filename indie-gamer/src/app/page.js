import Heading from "@/app/component/Heading";
import Link from "next/link";
import Image from 'next/image';
import { getReviews } from "../../lib/reviews";


export default async function Home() {
  const {reviews}=await getReviews(4)

  return (
   <div className="border  bg-white hover:shadow-x sm:w-full">
<Heading>India Gamer</Heading>
<p>
  Only the best Indie Games,reviewed for you.
</p>


<ul className="flex flex-row flex-wrap gap-3">
         { reviews.length>0 && reviews.map((el)=><li key={el.slug} className="border w-80  bg-white hover:shadow-xl">
          <Link href={`/reviews/${el.slug}`}>
       <Image src={el.image} alt="" width={"340"} height={"180"} className="rounded-t mb-2" />
       <div className="px-2 ">
       <h2 className="py-1 text-center font-orbitron">{el.title}</h2>
     <p className="hidden pt-2 sm:block text-center">{el.subtitle}</p>
     </div>
       </Link>
          </li>)}
    
        </ul>
      
   </div>
  )
}
