import {defineType,defineField} from 'sanity'
export const schemaTypes=[
 defineType({name:'tinyPlace',title:'Place',type:'document',fields:[
  defineField({name:'name',type:'string',validation:R=>R.required()}),
  defineField({name:'district',type:'string'}),
  defineField({name:'description',type:'text'}),
  defineField({name:'x',title:'Horizontal map position (0-100)',type:'number',validation:R=>R.min(0).max(100)}),
  defineField({name:'y',title:'Vertical map position (0-100)',type:'number',validation:R=>R.min(0).max(100)}),
 ]}),
 defineType({name:'tinyConsequence',title:'Consequence',type:'document',fields:[
  defineField({name:'title',type:'string',validation:R=>R.required()}),
  defineField({name:'description',type:'text',validation:R=>R.required()}),
  defineField({name:'ripple',title:'Visible change left by this scene',type:'text',validation:R=>R.required()}),
  defineField({name:'place',type:'reference',to:[{type:'tinyPlace'}],validation:R=>R.required()}),
  defineField({name:'scale',type:'string',options:{list:['personal','street','city']},validation:R=>R.required()}),
  defineField({name:'editorialState',type:'string',options:{list:['draft','reviewed','published']},validation:R=>R.required()}),
  defineField({name:'minutesLater',type:'number',validation:R=>R.min(0)}),
  defineField({name:'choices',type:'array',of:[{type:'object',fields:[
   defineField({name:'label',type:'string',validation:R=>R.required()}),
   defineField({name:'why',type:'text',validation:R=>R.required()}),
   defineField({name:'next',type:'reference',to:[{type:'tinyConsequence'}],validation:R=>R.required()}),
  ]}]})
 ]}),
 defineType({name:'tinyScenario',title:'Scenario',type:'document',fields:[
  defineField({name:'title',type:'string',validation:R=>R.required()}),
  defineField({name:'prompt',type:'text'}),
  defineField({name:'start',type:'reference',to:[{type:'tinyConsequence'}],validation:R=>R.required()}),
  defineField({name:'editorialState',type:'string',options:{list:['draft','reviewed','published']},validation:R=>R.required()}),
 ]}),
 defineType({name:'tinyVisitorScene',title:'Visitor Scene (Draft Inbox)',type:'document',fields:[
  defineField({name:'title',type:'string',validation:R=>R.required()}),
  defineField({name:'description',type:'text',validation:R=>R.required()}),
  defineField({name:'contributor',type:'string'}),
  defineField({name:'editorialNote',title:'Editor note before publication',type:'text'}),
  defineField({name:'place',type:'reference',to:[{type:'tinyPlace'}]}),
  defineField({name:'editorialState',type:'string',options:{list:['draft','reviewed','published']},initialValue:'draft'}),
  defineField({name:'authorHash',type:'string',hidden:true,readOnly:true}),
  defineField({name:'submittedAt',type:'datetime',readOnly:true}),
 ]})
]