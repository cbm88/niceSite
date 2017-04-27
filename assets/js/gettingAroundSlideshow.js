/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var station = new Image();
station.src="images/niceTrainStation.jpg";

var stationInside = new Image();
stationInside.src = "images/insideNiceStation.jpg";

var tram = new Image();
tram.src = "images/nicetram.jpg";

var bus = new Image();
bus.src = "images/niceBus.jpg";

function item(head, pic){
    this.head = head;
    this.pic = pic;
    this.write = function(){
        return '<p><img src="'+this.pic+'"/>'+'<h4><b><i>'+this.head+'</i></b></h4><br>'+
                '<p><button onclick="play()">&#9658;</button> <button onclick="pause()"><b>||</b></button></p>';
    };
}

var imgArray = new Array();
imgArray[0] = new item("The Gare Nice de Ville",station.src);
imgArray[1] = new item("The View Inside Gare Nice de Ville",stationInside.src);
imgArray[2] = new item("A Tram Arriving at Place Massena",tram.src);
imgArray[3] = new item("A Commuter Bus in Nice",bus.src);

var index = 0;
var timer;
var len = imgArray.length;

function rotateImgs(){
    if(index >= len)
        index = 0;
    document.getElementById("transportImages").innerHTML = imgArray[index].write();
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


