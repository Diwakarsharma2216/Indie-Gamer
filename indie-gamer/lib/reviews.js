
import matter from 'gray-matter';
import qs from "qs"
import fetch from 'cross-fetch'
import { marked } from 'marked';
import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

const strapiurl='http://localhost:1337';
export async function getReview(slug){
    // const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    // const {content,data:{title,date,image}}=matter(text)
   
    // const body=marked(content)
    // return {slug,title,date,image,body}

    const url=`${strapiurl}/api/reviews`
    + '?'+ qs.stringify({
      filters:{slug :{$eq:slug}},
    fields:['slug','title','subtitle','publishedAt','body'],
    populate:{image :{fields :['url']}},
    pagination :{pageSize:1,withCount:false},
    },{encodeValuesOnly:true})
    
    const response =await fetch(url)
    
    const {data}=await response.json() 
    const {attributes} =data[0]
    return {
      slug:attributes.slug,
      title:attributes.title, 
      date:attributes.publishedAt.slice(0,'yyyy-mm-dd'.length),
      image:strapiurl + attributes.image.data.attributes.url,
      body:marked(attributes.body)
    }
  }


  export async function getReviews(pagevalue,page){
    const url=`${strapiurl}/api/reviews`
    + '?'+ qs.stringify({
    fields:['slug','title','subtitle','publishedAt'],
    populate:{image :{fields :['url']}},
    sort :['publishedAt:desc'],
    pagination :{pageSize:pagevalue,page},
    },{encodeValuesOnly:true})
    
    const response =await fetch(url)
    
    const hdata=await response.json() 
    const {data}=hdata
   
      return {pagecount:hdata.meta.pagination.pageCount, reviews:data.map(({attributes})=>({
        slug:attributes.slug,
        title:attributes.title, 
        subtitle:attributes.subtitle,
        date:attributes.publishedAt.slice(0,'yyyy-mm-dd'.length),
        image:strapiurl + attributes.image.data.attributes.url
      }))}
  }

  
