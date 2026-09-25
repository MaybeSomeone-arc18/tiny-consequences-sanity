import {createClient} from '@sanity/client'
import Experience from './experience'
import type {Story} from '../data'

const client=createClient({projectId:'7i4i5k0j',dataset:'production',apiVersion:'2025-02-19',token:process.env.SANITY_VIEWER_TOKEN,useCdn:false})
export const dynamic = 'force-dynamic'
const query=`*[_id == "tiny.scenario.bench" && editorialState == "published"][0]{title,prompt,"start":start->_id,"places":*[_type == "tinyPlace"]{"id":_id,name,district,x,y},"nodes":*[_type == "tinyConsequence" && editorialState == "published"]{"id":_id,title,description,"place":place->_id,scale,minutesLater,"choices":choices[]{label,why,"next":next->_id}}}`
export default async function Page(){
  const story=await client.fetch<Story|null>(query, {}, {cache:'no-store'})
  if(!story) return <main className="unavailable"><h1>The case file is unavailable.</h1><p>Published records could not be loaded from Sanity.</p></main>
  const visible = new Set(story.nodes.map(n=>n.id))
  story.nodes = story.nodes.map(n=>({...n,choices:n.choices.filter(c=>visible.has(c.next))}))
  return <Experience story={story}/>
}
