const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let keyword = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if(text.includes(keyword)){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

}
const tanggal = new Date();

document.getElementById("tanggal").innerHTML =
tanggal.toLocaleDateString("id-ID", {
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
});
function topFunction(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}
let count =
localStorage.getItem("visitorCount") || 0;

count++;

localStorage.setItem("visitorCount", count);

const visitor =
document.getElementById("visitorCount");

if(visitor){
    visitor.innerHTML =
    "Pengunjung: " + count;
}