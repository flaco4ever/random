function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverv = document.getElementById("adverb").value;


    document.getElementsById("sentence").innerHTML = sentence (verb, adberb, person, place, adj);
}


function sentences(verb, adberb, person, place, adj) {
    sentenceArray = [`today I had to ${verb} ${adverb}. But
    right in the middle of it, ${person} came with this ${adj}
    book and wanted to go to ${place}` , `${person} was in ${place} trying to 
    ${verb}. however, ${person} left a ${adj} shirt behind, while crying ${adverb}. `]


    ranN = Math.floor(Math.random() * sentenceArray.length)
    // 0 to 2

    return sentenceArray[2];





}