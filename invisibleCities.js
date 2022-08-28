console.log("Kublai Khan does not necessarily believe everything Marco Polo says when he describes the cities visited on his expeditions, but hte meperor of the Tartars does continue listening to the young Venetian with greater attentino and curiosity  than he shoes any other messenger or explorer of his.")
const theCities = "Cities and";
const cities = "cities";


const calvino = ["memory", "desire", "signs", "eyes", "names", "the dead","the sky"]
const imgs = "imgs/IC_0" ;
let theIndx = 0;
let theImage = document.getElementById("thePhoto")


let theTxt = document.querySelector("h4")
theTxt.textContent = "Desires are already memories";

theTxt.addEventListener('click', changeTxt)



function changeTxt(){
    theIndx = theIndx + 1
    if(theIndx >= calvino.length){
        theIndx = 0;
    }
    theTxt.textContent = calvino[theIndx]
   theImage.src = "imgs/IC_0" + [theIndx] + ".gif"
   let italo = ["Desires are already memories.", "In the years that followed, my eyes returned to contemplate teh desert expanses and the caravan routes; but now I know this path is only one of the many that opened before me on that morning...", 
                "The city is redundant: it repeats istels fo that something qill stick in the mind. Memory is redundant it repeats signs so that the city will begin to exist.",
                "eyes" + " eyes"+ " eyes" + " eyes" + " eyes", "And even I, who would liek to keep the two cities distinct in my memory, can speak only of the one, because teh recollection of the other, in the lack of words to fix it, has been lost.",
            "And here in fact, we are.", "Convinced that every innocation in the city influences the sky's pattern, before taking any decision they calculate the risks and advantages for themselves and for the city and for all worlds."]
   console.log(italo[theIndx])

}
   


    // "Chapter 3":
    //     {
    //         "title": "eyes.",
    //         "occurance": 1
    //     }
    
    // ]

 
    

 
 
 
   
  
 
  
//     {
//         "chapter": 4,
//         "title": "signs.",
//         "occurance": 5
//     },
//     {
//         "chapter": 4,
//         "title": "Thin cities.",
//         "occurance": 4
//     },
//     {
//         "chapter": 4,
//         "title": "Trading cities.",
//         "occurance": 3
//     },
//     {
//         "chapter": 4,
//         "title": "eyes.",
//         "occurance": 2
//     },
//     {
//         "chapter": 4,
//         "title": "names.",
//         "occurance": 1
//     },
//     {
//         "chapter": 5,
//         "title": "Thin cities.",
//         "occurance": 5
//     },
//     {
//         "chapter": 5,
//         "title": "Trading cities.",
//         "occurance": 4
//     },
//     {
//         "chapter": 5,
//         "title": "eyes.",
//         "occurance": 3
//     },
//     {
//         "chapter": 5,
//         "title": "names.",
//         "occurance": 2
//     },
//     {
//         "chapter": 5,
//         "title": "the dead.",
//         "occurance": 1
//     },
//     {
//         "chapter": 6,
//         "title": "Trading cities.",
//         "occurance": 5
//     },
//     {
//         "chapter": 6,
//         "title": "eyes.",
//         "occurance": 4
//     },
//     {
//         "chapter": 6,
//         "title": "names.",
//         "occurance": 3
//     },
//     {
//         "chapter": 6,
//         "title": "the dead.",
//         "occurance": 2
//     },
//     {
//         "chapter": 6,
//         "title": "the sky.",
//         "occurance": 1
//     },
//     {
//         "chapter": 7,
//         "title": "eyes.",
//         "occurance": 5
//     },
//     {
//         "chapter": 7,
//         "title": "names.",
//         "occurance": 4
//     },
//     {
//         "chapter": 7,
//         "title": "the dead.",
//         "occurance": 3
//     },
//     {
//         "chapter": 7,
//         "title": "the sky.",
//         "occurance": 2
//     },
//     {
//         "chapter": 7,
//         "title": "Continuous cities.",
//         "occurance": 1
//     },
//     {
//         "chapter": 8,
//         "title": "names.",
//         "occurance": 5
//     },
//     {
//         "chapter": 8,
//         "title": "the dead.",
//         "occurance": 4
//     },
//     {
//         "chapter": 8,
//         "title": "the sky.",
//         "occurance": 3
//     },
//     {
//         "chapter": 8,
//         "title": "Continuous cities.",
//         "occurance": 2
//     },
//     {
//         "chapter": 8,
//         "title": "Hidden cities.",
//         "occurance": 1
//     },
//     {
//         "chapter": 9,
//         "title": "the dead.",
//         "occurance": 5
//     },
//     {
//         "chapter": 9,
//         "title": "the sky.",
//         "occurance": 4
//     },
//     {
//         "chapter": 9,
//         "title": "Continuous cities.",
//         "occurance": 3
//     },
//     {
//         "chapter": 9,
//         "title": "Hidden cities.",
//         "occurance": 2
//     },
//     {
//         "chapter": 9,
//         "title": "the sky.",
//         "occurance": 5
//     },
//     {
//         "chapter": 9,
//         "title": "Continuous cities.",
//         "occurance": 4
//     },
//     {
//         "chapter": 9,
//         "title": "Hidden cities.",
//         "occurance": 3
//     },
//     {
//         "chapter": 9,
//         "title": "Continuous cities.",
//         "occurance": 5
//     },
//     {
//         "chapter": 9,
//         "title": "Hidden cities.",
//         "occurance": 4
//     },
//     {
//         "chapter": 9,
//         "title": "Hidden cities.",
//         "occurance": 5
//     }
// ]