const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const contents = document.querySelectorAll(".content")


about.addEventListener("click",(e)=>{
    // console.log(e.target)
    //
    //we use data to add unique name to the buttons, so when we select them they would'nt clash with the contents
    //with use e.target to get the name and we use the names as the id of the content so we can select both at the same time
    console.log(e.target.dataset.id)
    const id = e.target.dataset.id
    if(id){
        //remove active from buttons
        btns.forEach((btn)=>{
            btn.classList.remove("active")
            // btn.innerHTML = id
            // e.target.classList.add("active")
        })
        e.target.classList.add("active")
        
        //hide other articles
        contents.forEach((content)=>{
            content.classList.remove("active")
        })
        ///
        ///we use the dataset to select the contents, so we can add active to both the buttons and the content at the same time
        const element = document.getElementById(id)
        console.log(element)
        element.classList.add("active")
    }
})