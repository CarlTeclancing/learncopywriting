window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('progressBar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
});


function openNav(){
    if(document.getElementById("sidebar").style.width == "300px"){
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("sidebar").style.padding = "0px";
    }
    else{
        document.getElementById("sidebar").style.width = "300px";
        document.getElementById("sidebar").style.width = "300px";
        document.getElementById("sidebar").style.padding = "20px";
        document.getElementById("sidebar").style.top = "0px";
        document.getElementById("sidebar").style.zIndex = "5";
        document.getElementById("logo").style.display = "none";
    }
    
    // document.getElementsByClassName("sidebar").style.width = "250px";
    // document.getElementsByClassName("sidebar").style.padding = "20px";
}