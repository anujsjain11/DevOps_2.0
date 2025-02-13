// triggering animation
    // triggering the animation of "team"
    document.getElementById("mainBoxHover").addEventListener("mouseover",function(){    

      // animation of team
      document.getElementById("team").classList.remove("rev");
      void team.offsetWidth;
      document.getElementById("team").classList.add("fwd");
      
      // animation of club
      document.getElementById("club").classList.remove("revClub");
      void club.offsetWidth;
      document.getElementById("club").classList.add("fwdClub");

      // animation of cursor
      document.getElementById("circleId").classList.remove("shrinkCircle");
      void team.offsetWidth;
      document.getElementById("circleId").classList.add("growCircle");
      
  })
      // triggering the animation of "devops"
  document.getElementById("mainBoxHover").addEventListener("mouseleave",function(){

    // animation of team
      document.getElementById("team").classList.remove("fwd");
      void team.offsetWidth;
      document.getElementById("team").classList.add("rev");

      // animation of club
      document.getElementById("club").classList.remove("fwdClub");
      void club.offsetWidth;
      document.getElementById("club").classList.add("revClub");

      // animation of cursor
      document.getElementById("circleId").classList.remove("growCircle");
      void team.offsetWidth;
      document.getElementById("circleId").classList.add("shrinkCircle");
  
  })

// get co-ordinate of the mouse 
function AddAnimatedCircle() {
    const circle = document.getElementById('circleId');
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
      });
    });
  }

AddAnimatedCircle();

// grow when hover on "explore more"
document.getElementById("nextPageBox").addEventListener("mouseleave",function(){
  document.getElementById("circleId").classList.remove("growCircle");
  void team.offsetWidth;
  document.getElementById("circleId").classList.add("shrinkCircle");
  document.getElementById("nextPage").style.backgroundColor="transparent";
  document.getElementById("nextPage").style.color="#C4BEB4";
})
document.getElementById("nextPageBox").addEventListener("mouseover",function(){
  document.getElementById("circleId").classList.remove("shrinkCircle");
  void team.offsetWidth;
  document.getElementById("circleId").classList.add("growCircle");
  document.getElementById("nextPage").style.backgroundColor="#C4BEB4";
  document.getElementById("nextPage").style.color="black";
})


// explore more page redirection
document.getElementById("nextPageBox").addEventListener("click",(e)=>{
  window.location.href = "";
})
