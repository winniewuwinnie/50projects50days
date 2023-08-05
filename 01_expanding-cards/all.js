const panels = document.querySelectorAll(".panel");
// console.log(panel)

function removeActiveClasses(){
  panels.forEach(function(item,index){
    item.classList.remove("active");
  })
}

panels.forEach(function (item, index) {
  console.log(item)
  item.addEventListener("click",function(e){
    removeActiveClasses();
    e.target.classList.add("active")
  })
})