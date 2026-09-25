import {createClient} from '@sanity/client'
import {fixture} from './data.mjs'
const token=process.env.SANITY_TOKEN
if(!token) throw new Error('SANITY_TOKEN is required')
const client=createClient({projectId:'7i4i5k0j',dataset:'production',apiVersion:'2025-02-19',token,useCdn:false})
const ref=id=>({_type:'reference',_ref:`tiny.${id}`})
const docs=[...fixture.places.map(p=>({_id:`tiny.${p.id}`,_type:'tinyPlace',name:p.name,district:p.district,x:p.x,y:p.y})),...fixture.nodes.map(n=>({_id:`tiny.${n.id}`,_type:'tinyConsequence',title:n.title,description:n.description,place:ref(n.place),scale:n.scale,minutesLater:n.minutesLater,editorialState:'published',choices:n.choices.map((c,i)=>({_key:`edge${i}`,_type:'object',label:c.label,why:c.why,next:ref(c.next)}))})),{_id:'tiny.scenario.bench',_type:'tinyScenario',title:fixture.title,prompt:fixture.prompt,start:ref(fixture.start),editorialState:'published'}]
let tx=client.transaction(); for(const doc of docs)tx=tx.createOrReplace(doc); const result=await tx.commit()
console.log('seeded',result.results.map(r=>r.id).join(', '))
