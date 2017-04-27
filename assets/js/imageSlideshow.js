/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var promenadePic = new Image();
promenadePic.src="images/pdaPic.jpg";

var matisse = new Image();
matisse.src = "images/matisseMuseum.jpg";

var chagall = new Image();
chagall.src = "images/chagallMuseum.jpg";

var massena = new Image();
massena.src = "images/massena.jpg";

var niceCath = new Image();
niceCath.src = "images/niceCath.jpg";

var niceRussian = new Image();
niceRussian.src = "images/niceRussianCathedral.jpg";

var notreDame = new Image();
notreDame.src = "images/notreDameNice.jpg";

var colline = new Image();
colline.src = "images/colline.jpg";


function item(head, pic){
    this.head = head;
    this.pic = pic;
    this.write = function(){
        return '<p><img src="'+this.pic+'"/>'+'<h4><b><i>'+this.head+'</i></b></h4>'+
                '<p id="buttongrp"><button onclick="play()">&#9658;</button> <button onclick="pause()"><b>||</b></button></p>';
    };
}

var imgArray = new Array();
imgArray[0] = new item("Promenade des Anglais",promenadePic.src);
imgArray[1] = new item("Musee Matisse",matisse.src);
imgArray[2] = new item("Musee Marc Chagall",chagall.src);
imgArray[3] = new item("Place Massena",massena.src);
imgArray[4] = new item("Cathedrale de Nice",niceCath.src);
imgArray[5] = new item("St. Nicholas Orthodox Cathedral",niceRussian.src);
imgArray[6] = new item("Notre Dame de Nice",notreDame.src);
imgArray[7] = new item("Colline du Chateau",colline.src);

var index = 0;
var timer;
var len = imgArray.length;

function rotateImgs(){
    if(index >= len)
        index = 0;
    document.getElementById("imageShowDiv").innerHTML = imgArray[index].write();
    index++;
    timer = setTimeout('rotateImgs()',4000);
}

function pause(){
    if(timer !== null){
        clearTimeout(timer);
        timer = null;
    }
}

function play(){
    if(timer === null)
        timer = setTimeout('rotateImgs()',4000);
}

