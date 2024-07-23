

// function accordion(id) {
// const display= document.getElementById(id).style.display;
// document.getElementById(id).style.display =  display  == 'none' ? 'block' : 'none';

// }

// class AccordionItem{
//     constructor(header, content){
//         this.header = header;
//         this.content = content;
//     }
// }

// let accordionItems = [

//     {header:'2',content:'2'},
//     new AccordionItem('3','3'),
//     new AccordionItem('4','4'),


// ]



// // let array = ['ffhfh.jpg','gjgj'];


// accordionItems.forEach((x,index) => {
//     document.getElementById("accordion").innerHTML +=
//     `<div class="accordion-item">
//     <div class="accordion-header" onclick="accordion('accordion-content-${index}')">${x.header}</div>
//     <div class="accordin-content" id="accordion-content-${index}">${x.content}</div>
//   </div>    `

// })







class Accordion {
    constructor(header, content) {
        this.header = header;
        this.content = content;
    }
}


const accordionItems = [

    new Accordion("item 1", "paragraph 1"),
    new Accordion("item 2", "paragraph 2"),
    new Accordion("item 3", "paragraph 3"),

]


accordionItems.forEach(x = (value, index, array) => {

    document.getElementById("demo").innerHTML +=
        `<div id="accordionItem" >
    <div class="header" id="header" onclick="output('content-${index}', 'icon-${index}')"> ${value.header}  <i  id="icon-${index}" class="material-icons ">expand_more</i></div>
    <div class="content" id="content-${index}"> ${value.content}</div>
    </div>
    `
})





function output(a , b) {

    let y = document.getElementById(a).style;

    if(y.display == "block") {

        y.display = "none"
        document.getElementById(b).innerHTML = "expand_more";

    }else {

        y.display = "block"
        document.getElementById(b).innerHTML = "expand_less";
    }


}

