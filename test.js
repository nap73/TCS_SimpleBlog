var blog = [];

function addBlog() {

     var newBlog = readData();
     console.log(newBlog);
     blog.push(newBlog);
     storeBlog();
     publish();
     resetBlog();
  
}

function readData(){
    var blogData={};
 
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;

    blogData.title = title ;
    blogData.desc = desc ;
    blogData.imageInfo = imageInfo; 
     
   return blogData;

}

function storeBlog() {
    localStorage.setItem("BLOG", JSON.stringify(blog));

   //  console.log("DONE TILL STORE BLOG")
 
  
}

function publish() {
   
    
    console.log("IN PUBLISH");

    var storedBlog = localStorage.getItem("BLOG");
    var Blog = JSON.parse(storedBlog);
    resetCard();
   
    for (const [key, value] of Object.entries(Blog)) {

    
        var MainBlog = document.getElementById("MainBlog");

      
        const div = document.createElement("div");
        const h5 = document.createElement("h5");
        const img = document.createElement("img");
        const subdiv = document.createElement("div");
        const p = document.createElement("p");


        
        MainBlog.append(div);
        div.append(img);
        div.append(subdiv);
        subdiv.append(h5);
        subdiv.append(p);


       

        div.setAttribute("class", "card");
        div.setAttribute("id", "blogg");
        div.setAttribute("style", " width: 18rem;");
        img.setAttribute("class", "card-img-top");
        img.setAttribute("id", "blogImg");
        img.setAttribute("style", "width: 100%; height: 180px");
        img.setAttribute("src", value.imageInfo);
        
        subdiv.setAttribute("id","cardblog" );
        subdiv.setAttribute("class","card-body" );
        h5.setAttribute("id" , "titleblog") ;
        h5.setAttribute("class" , "class-title") ;
        p.setAttribute("id","descblog");
        p.setAttribute("class","card-text");


        h5.innerHTML = value.title ;
        p.innerHTML = value.desc ;
     }

     
}

function resetCard() {
   
       document.getElementById("MainBlog").innerHTML = "";
    
    }

function resetBlog() {

    document.getElementById("title").value="";
    document.getElementById("desc").value="";
    document.getElementById("imageId").value = "";
}