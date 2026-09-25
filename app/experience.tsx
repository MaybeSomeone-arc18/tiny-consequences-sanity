'use client'
import {useState} from 'react'
import type {Story} from '../data'
import type {Node} from '../data'

export default function Experience({story}:{story:Story}){
 const [trail,setTrail]=useState<string[]>([story.start])
 const [showModel,setShowModel]=useState(false)
 const current=story.nodes.find(n=>n.id===trail[trail.length-1]) as Node
 const place=story.places.find(p=>p.id===current.place)!
 function choose(id:string){if(story.nodes.some(n=>n.id===id))setTrail([...trail,id])}
 return <main>
  <div className="top"><div className="seal">✳</div><div className="dept">THE DEPARTMENT OF<br/><strong>TINY CONSEQUENCES</strong></div><span className="edition">CASE FILE 001 / A CITY OF ALMOSTS</span></div>
  <section className="intro"><p className="eyebrow">AN INTERACTIVE WORK OF FICTION · POWERED BY STRUCTURED CONTENT</p><h1>One little thing<br/><em>changes everything.</em></h1><p>Follow a missing bench through a city. Every choice moves the story to a different place, and every turn has a reason you can inspect.</p><button className="model" onClick={()=>setShowModel(!showModel)}>{showModel?'CLOSE':'INSPECT'} THE CONTENT MODEL ↗</button></section>
  {showModel&&<section className="inspector"><span className="eyebrow">HOW THIS STORY IS BUILT</span><h2>Not a generated answer. A graph you can edit.</h2><div className="modelgrid"><p><b>places</b><br/>named locations with map coordinates.</p><p><b>consequences</b><br/>the scene, elapsed time, scale, editorial status, and links to possible next scenes.</p><p><b>choices</b><br/>each edge has a label and a causal explanation. the app follows only published records.</p></div><p className="small">The published scenario, places, scenes, and choice edges are read from Sanity. The app only shows scenes marked published.</p></section>}
  <section className="workspace"><div className="left"><div className="panehead"><span>01 / THE CITY</span><span>MINUTE {String(current.minutesLater).padStart(2,'0')}</span></div><div className="map"><div className="grid"/><div className="road r1"/><div className="road r2"/><div className="river"/>{story.places.map(p=><div className={'marker '+(p.id===current.place?'active':'')} key={p.id} style={{left:`${p.x}%`,top:`${p.y}%`}}><span>✳</span><small>{p.name}</small></div>)}<div className="maplabel">THE CITY OF ALMOSTS<br/>NOT TO SCALE</div></div><div className="mapfoot">CURRENT LOCATION <strong>{place.name} / {place.district}</strong></div></div>
  <div className="right"><div className="panehead"><span>02 / YOUR CASE FILE</span><span>SCENE {String(trail.length).padStart(2,'0')}</span></div><div className="story"><div className="case"><span>THE MISSING BENCH</span><span>{current.scale.toUpperCase()} EFFECT</span></div><h2>{current.title}</h2><p className="description">{current.description}</p><div className="rule"/><p className="eyebrow">WHAT HAPPENS NEXT?</p><div className="choices">{current.choices.length?current.choices.map(c=><button key={c.next+c.label} onClick={()=>choose(c.next)}><span>{c.label}</span><small>{c.why}</small><b>↗</b></button>):<div className="end">A small ending, for now.<br/>The city keeps going.</div>}</div><div className="actions"><button onClick={()=>setTrail([story.start])}>START OVER ↺</button>{trail.length>1&&<button onClick={()=>setTrail(trail.slice(0,-1))}>STEP BACK ←</button>}</div></div></div></section>
  <footer><span>✳ FICTION, NOT A CIVIC FORECAST.</span><span>PROTOTYPE / PATH TWO / DEV x SANITY CHALLENGE</span></footer>
 </main>
}
