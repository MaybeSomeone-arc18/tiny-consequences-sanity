// Sanity Studio schema proposal. The prototype reads published records only.
export const schemas = [
  {name:'tinyPlace', title:'Place', type:'document', fields:[
    {name:'name',type:'string',validation:(R:any)=>R.required()},
    {name:'district',type:'string'},
    {name:'description',type:'text'},
    {name:'x',type:'number',description:'Map position, 0–100'},
    {name:'y',type:'number',description:'Map position, 0–100'},
  ]},
  {name:'tinyConsequence',title:'Consequence',type:'document',fields:[
    {name:'title',type:'string',validation:(R:any)=>R.required()},
    {name:'description',type:'text',validation:(R:any)=>R.required()},
    {name:'tinyPlace',type:'reference',to:[{type:'tinyPlace'}]},
    {name:'scale',type:'string',options:{list:['personal','street','city']},validation:(R:any)=>R.required()},
    {name:'editorialState',type:'string',options:{list:['draft','reviewed','published']},validation:(R:any)=>R.required()},
    {name:'minutesLater',type:'number'},
    {name:'choices',type:'array',of:[{type:'object',fields:[
      {name:'label',type:'string',validation:(R:any)=>R.required()},
      {name:'why',type:'text',description:'Explain why this action causes the next state.'},
      {name:'next',type:'reference',to:[{type:'tinyConsequence'}]},
    ]}]},
  ]},
  {name:'tinyScenario',title:'Scenario',type:'document',fields:[
    {name:'title',type:'string',validation:(R:any)=>R.required()},
    {name:'prompt',type:'text'},
    {name:'start',type:'reference',to:[{type:'tinyConsequence'}]},
    {name:'editorialState',type:'string',options:{list:['draft','reviewed','published']},validation:(R:any)=>R.required()},
  ]},
]
