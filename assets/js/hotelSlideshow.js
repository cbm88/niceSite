/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var hugo = new Image();
hugo.src="images/hugo.jpg";

var hyatt = new Image();
hyatt.src = "images/hyatt.jpg";

var mercure = new Image();
mercure.src = "images/mercurepromenade.jpg";

var negresco = new Image();
negresco.src = "images/negresco.jpg";

var perouse = new Image();
perouse.src = "images/perouse.jpg";

var palais = new Image();
palais.src = "images/petitpalais.jpg";

var radisson = new Image();
radisson.src = "images/radisson.jpg";

var riviera = new Image();
riviera.src = "images/niceriviera.jpg";

var suisse = new Image();
suisse.src = "images/suissetwo.jpg";

var westend = new Image();
westend.src = "images/westend.jpg";

function item(head, pic, link){
    this.head = head;
    this.pic = pic;
    this.link = link;
    this.write = function(){
        return '<p><a href="'+this.link+'"><img src="'+this.pic+'"/></a>'+'<h4><b><i>'+this.head+'</i></b></h4><br>'+
                '<p id="buttongrp"><button onclick="play()">&#9658;</button> <button onclick="pause()"><b>||</b></button></p>';
    };
}

var imgArray = new Array();
imgArray[0] = new item("La Villa Nice Victor Hugo ",hugo.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d197225-Reviews-La_Villa_Nice_Victor_Hugo-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[1] = new item("Hyatt Regency Nice Palais de la Mediterranie",hyatt.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d289384-Reviews-Hyatt_Regency_Nice_Palais_de_la_Mediterranee-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[2] = new item("Hotel du Petit Palais",palais.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d219970-Reviews-Hotel_du_Petit_Palais-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[3] = new item("Hotel La Perouse",perouse.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d263754-Reviews-Hotel_La_Perouse-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[4] = new item("Hotel Suisse",suisse.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d232365-Reviews-Hotel_Suisse-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[5] = new item("Mercure Nice Promenade des Anglais",mercure.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d197190-Reviews-Mercure_Nice_Promenade_des_Anglais-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[6] = new item("Radisson Blu Hotel, Nice",radisson.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d197181-Reviews-Radisson_Blu_Hotel_Nice-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[7] = new item("Hotel Negresco",negresco.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d195659-Reviews-Hotel_Negresco-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[8] = new item("Hotel West End",westend.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d197184-Reviews-Hotel_West_End-Nice_French_Riviera_Cote_d_Azur_Provence.html");
imgArray[9] = new item("Hotel Nice Riviera",riviera.src,"https://www.tripadvisor.com/Hotel_Review-g187234-d197194-Reviews-Hotel_Nice_Riviera-Nice_French_Riviera_Cote_d_Azur_Provence.html");

var index = 0;
var timer;
var len = imgArray.length;

function rotateImgs(){
    if(index >= len)
        index = 0;
    document.getElementById("hotelImages").innerHTML = imgArray[index].write();
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
