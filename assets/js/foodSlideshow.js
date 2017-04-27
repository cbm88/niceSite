/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var socca = new Image();
socca.src="images/Food-Socca.jpg";

var moules = new Image();
moules.src = "images/Food-Moules-et-Frites.jpg";

var fp = new Image();
fp.src = "images/Food-Pissaladiere.jpg";

var nicoise = new Image();
nicoise.src = "images/Food-Salade-Nicoise-no-dressing.jpg";

var pb = new Image();
pb.src = "images/Food-Le-Pan-Bagnat.jpg";

function item(head, pic, description){
    this.head = head;
    this.pic = pic;
    this.description=description;
    this.write = function(){
        return '<h3><b>'+this.head+'</b></h3><br>'+'<a class="image featured"><img src="'+this.pic+'"/>'+'<p>'+this.description+'</p>';
    };
}

var imgArray = new Array();
imgArray[0] = new item("Socca",socca.src,"A quintessential street food of Nice, socca is thin, crusty chickpea pancake with a soft interior. It’s cooked in a wood oven on a large round steel plate. It’s a favorite snack for anytime of day. It also pairs well with beer for those that want a break from wine.");
imgArray[1] = new item("Moules et Frites",moules.src,"This would not be considered Provençal or Niçoise as it originated in Belgium, but it’s sold just about everywhere in Nice. There are several ways to prepare the mussels but the most common is Moules marinière made with white wine, shallots, parsley and butter. Dip your fries in the sauce too – YUM!");
imgArray[2] = new item("Pissaladière",fp.src,"A pizza, but not a pizza. This tart is topped with onion, anchovies and olives. It’s an intense dish that’s worth a try. You can grab it from most boulangeries for a couple euros.");
imgArray[3] = new item("Salade Nicoise",nicoise.src,"My all time favorite meal in Nice! The classic Niçoise salad is a fabulous and filling salad with mesclun (a kind of mix salad), tomatoes, radish, onion, black olives, hard boiled eggs, tuna, and anchovies usually served with a olive oil. No ranch dressing here!");
imgArray[4] = new item("Le Pan Bagnat",pb.src,"Take your Salade Niçoise to go, kind-of. You’ll find  all the fixings of a Salade Niçoise stuffed into a tasty sandwich. The bread is always round and usually whole wheat. Sometimes you will see white bread sandwiches at a bakery as well.");

var index = 0;
var timer;
var len = imgArray.length;

function rotateImgs(){
    if(index >= len)
        index = 0;
    document.getElementById("cuisines").innerHTML = imgArray[index].write();
    index++;
    timer = setTimeout('rotateImgs()',4000);
}
