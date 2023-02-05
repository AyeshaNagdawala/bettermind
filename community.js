const ul = document.getElementById('newposts-ul');
listofmessages = [];

document.getElementById("post-btn").addEventListener("click",addNewPost);
function loadposts(){
    console.log("loading")
    listofmessages = JSON.parse(localStorage.getItem("test")) || [];
    console.log(listofmessages)
    if(listofmessages.length>0){
    for(i=0;i<listofmessages.length;i++)
        createnewpost(listofmessages[i])
    }
}
window.onload = loadposts;
function addNewPost(){
    message= document.getElementById("tweet").value;
    console.log(message);
    storedata(message);
    createnewpost(message)
}
function storedata(message){
    localStorage.setItem('test', JSON.stringify(listofmessages));
    listofmessages = JSON.parse(localStorage.getItem("test")) || [];
    listofmessages.push(message)
    localStorage.setItem('test', JSON.stringify(listofmessages));
    document.getElementById("tweet").value=''
}
function createnewpost(message){
    {
        var ul = document.getElementById("newposts-ul");


    var li = document.createElement("li");
    var divpost = document.createElement("div");
    divpost.classList.add("post")
    var divpost_avatar = document.createElement("div");
    divpost_avatar.classList.add("post__avatar");
    src="img/pf.svg";
    var divpost_img = document.createElement("img");
    divpost_img.src = src;
    divpost_avatar.appendChild(divpost_img)
    divpost.appendChild(divpost_avatar)

    var divpost_body = document.createElement("div");
    divpost_body.classList.add("post__body")

    var divpost_header = document.createElement("div");
    divpost_header.classList.add("post__header")

    var divpost_headertext = document.createElement("div");
    divpost_headertext.classList.add("post__headerText")

    var text_h3 = document.createElement("h3");
    var text_h3_span1 = document.createElement("span");
    text_h3_span1.classList.add("post__headerSpecial");
    var snippet4 = document.createTextNode(" @ajaykvmaurya ")
    text_h3_span1.appendChild(snippet4)
    text_h3.appendChild(text_h3_span1)
    var post_headerdes = document.createElement("div");
    post_headerdes.classList.add("post__headerDescription")
    
    var post_headerdes_p = document.createElement("p");
    var snippet = document.createTextNode(message)
    var snippet2 = document.createTextNode("Ajay Maurya")
    post_headerdes_p.appendChild(snippet)
    
    
    text_h3.prepend(snippet2)

    post_headerdes.appendChild(post_headerdes_p);
    divpost_headertext.appendChild(text_h3)
    
    divpost_header.appendChild(divpost_headertext)
    divpost_header.appendChild(post_headerdes)
    
    divpost_body.appendChild(divpost_header)
    divpost.appendChild(divpost_body)

    li.appendChild(divpost);
    ul.prepend(li);}
    console.log(message)
}