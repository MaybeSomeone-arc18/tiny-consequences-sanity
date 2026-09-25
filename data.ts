export type Place = {id:string;name:string;district:string;x:number;y:number}
export type Choice = {label:string;why:string;next:string}
export type Node = {id:string;title:string;description:string;ripple:string;place:string;scale:'personal'|'street'|'city';minutesLater:number;choices:Choice[]}
export type VisitorScene = {id:string;title:string;description:string;place:string;contributor:string}
export type Story = {title:string;prompt:string;start:string;places:Place[];nodes:Node[];visitorScenes:VisitorScene[]}
