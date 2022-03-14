var t = document.getElementById("valuet");
var c = document.getElementById("valuec");
var p = document.getElementById("valuep");
var o = document.getElementById("valueo");
function add(veg){
    if(veg == "t"){
        var temp = +[t.textContent];
        temp++;
        t.textContent = temp;
    }
    if(veg == "p"){
        var temp = +[p.textContent];
        temp++;
        p.textContent = temp;
    }
    if(veg == "c"){
        var temp = +[c.textContent];
        temp++;
        c.textContent = temp;
    }
    if(veg == "o"){
        var temp = +[o.textContent];
        temp++;
        o.textContent = temp;
    }
}
function sub(veg){
    if(veg == "t"){
        var temp = +[t.textContent];
        temp--;
        t.textContent = temp;
    }
    if(veg == "p"){
        var temp = +[p.textContent];
        temp--;
        p.textContent = temp;
    }
    if(veg == "c"){
        var temp = +[c.textContent];
        temp--;
        c.textContent = temp;
    }
    if(veg == "o"){
        var temp = +[o.textContent];
        temp--;
        o.textContent = temp;
    }
}