  function setImagePreview() {  
    
    var docObj = document.getElementById("doc");
    var test = document.getElementById("insertImg");
    
    if(docObj.files && docObj.files[0]){
        var newImg = document.createElement('img');
        newImg.src = window.URL.createObjectURL(docObj.files[0]);  
        // newImg.src = docObj.files[0]; 
        
        test.appendChild(newImg);
        // test.innerHTML += newImg;
    }
}