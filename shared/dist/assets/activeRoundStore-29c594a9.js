import{D as t,h as a,j as n}from"./installCommonHelpers-978315d6.js";const o=nodecg.Replicant("activeRound",t),l=nodecg.Replicant("swapColorsInternally",t),s=nodecg.Replicant("breakStagesVisible",{defaultValue:!1}),i=a("activeRound",{state:()=>({activeRound:null,swapColorsInternally:null,breakStagesVisible:!1}),getters:{formattedMatchType:e=>`${e.activeRound.match.type==="BEST_OF"?"Best of":"Play all"} ${e.activeRound.games.length}`}}),r=n([o,l,s],i);export{r as i,i as u};