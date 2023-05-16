{
    // dark
    const dark = document.getElementById("dark")
    const body = document.getElementById("body")
    dark.addEventListener("click", (eo) => {
      body.classList.toggle("dark")
    })


    let btn = document.querySelector(".create");
    let id = document.querySelector(".create").getAttribute("data-linkid");
    btn.addEventListener("click",()=>{
        fetch(`/deleteArticle/${id}`,{method:"DELETE"}).then((data)=>{
                if(data.status == 200){
                    location.href = "/all-articles";
                }
        }).catch((error)=>{
            console.log(error)
        })
    })
}