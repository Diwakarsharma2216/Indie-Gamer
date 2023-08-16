import Heading from '@/app/component/Heading'
import React from 'react'
import { getReview } from '../../../../lib/reviews'
import ShareLinkButton from '@/app/component/ShareLinkButton'
import Image from 'next/image';


const SingleReviewPage = async(props) => {

// const {title,date,image,body}= await getReview(props.params.slug)
 const {title,date,image,body}= await getReview(props.params.slug)

  return (
    <div>
        <Heading>
         
         {title}
          </Heading>
          <div className="flex gap-3 items-baseline">
          <p className="italic pb-2">{date}</p>
          <ShareLinkButton />
          </div>
          
          <Image src={image} alt="" width={"640"} height={"360"} className="rounded mb-2" />
          {/* below line is responsible for conveting marke don langues into html code */}
          <article dangerouslySetInnerHTML={{__html:body}}
         className="max-w-screen-sm prose prose-slate" />
    </div>
  )
}

export default SingleReviewPage