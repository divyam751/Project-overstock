var ltd = document.getElementById("ltd");
var bffer = document.getElementById("bffer");
var tts = document.getElementById("tts");
var ofb = document.getElementById("ofb");

var urlltd = "http://localhost:3000/ltd";
var urlbffer = "http://localhost:3000/bffer"
var urltts = "http://localhost:3000/tts"
var urlofb = "http://localhost:3000/ofb"

var ltdData = fetch(urlltd)
.then((response)=>{
    return response.json();
})
.then((response)=>{
    displayDataltd(response)
})
.catch((error)=>{
    console.log(error);
});


function displayDataltd(data){
    for(let i = 0; i < data.length;i ++){
        let ltdContainer = document.createElement("div");
        ltdContainer.setAttribute("class","ltdContainer");
        let off = document.createElement("h2");
        off.setAttribute("class","off")
        off.innerHTML = "Extra&nbsp15%&nbspoff"
        
        let text = document.createElement("p");
        let image = document.createElement("img");
        image.src = `${data[i].img}`;
        let str = `${data[i].title}`
        str = str.replace(/\s/g, ' ');
        text.innerText = str;
        
        ltdContainer.append(image,off,text);
        ltd.append(ltdContainer);
    }
}

var bfferData = fetch(urlbffer)
.then((response)=>{
    return response.json();
})
.then((response)=>{
    displayDatabffer(response)
    // console.log(response);
})
.catch((error)=>{
    console.log(error);
});

function displayDatabffer(data){
    for(let i = 0; i < data.length; i++){
        let bfferContainer = document.createElement("div");
        let bfferText = document.createElement("p");
        bfferContainer.setAttribute("class","bfferContainer");
        let image = document.createElement("img");
        image.src = `${data[i].img}`;
        bfferText.innerText = `${data[i].title}`
        bfferContainer.append(image,bfferText);
        bffer.append(bfferContainer);
    }
}