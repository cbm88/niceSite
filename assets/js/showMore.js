/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showMore() {
    var div = document.getElementById('moreDiv');
    var statusBtn = document.getElementById('showBtn');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        statusBtn.value="HIDE";
    } else {
        div.style.display = 'none';
        statusBtn.value="SHOW MORE";
    }
}

function showMoreFoods(){
    var foodDiv = document.getElementById('moreFood');
    var moreButton = document.getElementById('showFoodsBtn');
    if (foodDiv.style.display === 'none') {
        foodDiv.style.display = 'block';
        moreButton.value="HIDE";
    } else {
        foodDiv.style.display = 'none';
        moreButton.value="SHOW MORE";
    }
}
