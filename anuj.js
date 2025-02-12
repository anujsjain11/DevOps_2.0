console.log("hi")
document.getElementById("mainBoxHover").addEventListener("mouseover",function(){    
    document.getElementById("team").classList.remove("rev");
    void team.offsetWidth;
    document.getElementById("team").classList.add("fwd");

    document.getElementById("club").classList.remove("revClub");
    void club.offsetWidth;
    document.getElementById("club").classList.add("fwdClub");
})

document.getElementById("mainBoxHover").addEventListener("mouseleave",function(){
    document.getElementById("team").classList.remove("fwd");
    void team.offsetWidth;
    document.getElementById("team").classList.add("rev");
    
    document.getElementById("club").classList.remove("fwdClub");
    void club.offsetWidth;
    document.getElementById("club").classList.add("revClub");

})