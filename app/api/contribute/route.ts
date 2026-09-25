import {createClient} from '@sanity/client'
import {createHash,randomUUID} from 'crypto'

export const runtime='nodejs'
const client=createClient({projectId:'7i4i5k0j',dataset:'production',apiVersion:'2025-02-19',useCdn:false,perspective:'raw',token:process.env.SANITY_CONTRIBUTE_TOKEN})
const maxPerHour=4
export async function POST(req:Request){
 try{
  const origin=req.headers.get('origin')
  const host=req.headers.get('host')
  if(origin&&new URL(origin).host!==host)return Response.json({error:'This form must be submitted from the site.'},{status:403})
  const length=Number(req.headers.get('content-length')||0)
  if(length>5000)return Response.json({error:'Your scene is too long.'},{status:413})
  const body=await req.json()
  const title=typeof body.title==='string'?body.title.trim():''
  const text=typeof body.text==='string'?body.text.trim():''
  const name=typeof body.name==='string'?body.name.trim():''
  const place=typeof body.place==='string'?body.place:''
  if(!title||title.length>80||text.length<30||text.length>700||name.length>40||!/^tiny\.[a-z]+$/.test(place))return Response.json({error:'Check the title, scene and place, then try again.'},{status:400})
  if(!process.env.SANITY_CONTRIBUTE_TOKEN||!process.env.CONTRIBUTE_SALT)return Response.json({error:'The draft desk is not available right now.'},{status:503})
  const placeDoc=await client.fetch<{_id:string}|null>('*[_type=="tinyPlace" && _id==$id][0]{_id}',{id:place})
  if(!placeDoc)return Response.json({error:'Choose a place in the city.'},{status:400})
  const ip=(req.headers.get('x-forwarded-for')||'').split(',')[0].trim()
  const stamp=createHash('sha256').update(ip+'|'+process.env.CONTRIBUTE_SALT).digest('hex').slice(0,24)
  const since=new Date(Date.now()-60*60*1000).toISOString()
  const recent=await client.fetch<number>('count(*[_type=="tinyVisitorScene" && authorHash==$stamp && _createdAt>$since])',{stamp,since})
  if(recent>=maxPerHour)return Response.json({error:'You have sent several scenes already. Come back later.'},{status:429})
  await client.create({_id:`drafts.tiny.visitor.${randomUUID()}`,_type:'tinyVisitorScene',title,description:text,contributor:name||'Anonymous',place:{_type:'reference',_ref:place},editorialState:'draft',authorHash:stamp,submittedAt:new Date().toISOString()})
  return Response.json({ok:true},{status:201})
 }catch(e){console.error('scene submission failed',e instanceof Error?e.message:'unknown');return Response.json({error:'The draft desk is temporarily unavailable.'},{status:500})}
}
