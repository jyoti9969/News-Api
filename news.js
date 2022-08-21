var newscard=$("#card");
var images=$("#images");
var heading = $("heading");
var description=$("description")
var firstcard=$("#firstcards");
var mycards=$("#my-cards")

var spinner=$(".spinner-border");
spinner.hide()
// firstcard.hide();
$(".searching").click(function(){
  mycards.text("");
 firstcard.hide();
  spinner.show();
  var keyword=$("#input").val();
  if(keyword==''){
    keyword="latest";
  }
    $.get("https://newsapi.org/v2/everything?q="+keyword+"&apiKey=06fc87f546d649ae939b37e5258e40bd",function(data){
        console.log(data);
     var detail=data.articles;
     console.log(detail);
     spinner.hide();
     
     for(let newsdetail of detail ){
        mycards.append(`
        <div class="card mb-3 " style="max-width: 1040px;margin-left:10%;" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${newsdetail.urlToImage}" class="img-fluid rounded-start" alt="..." style="height:100%;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${newsdetail.title}</h5>
              <p class="card-text">${newsdetail.description}</p>
              <p class="card-text"><small class="text-muted">${newsdetail.publishedAt} | ${newsdetail.author}</small></p>
              <button type="button" class="btn btn-danger" ><a href="${newsdetail.url}" style="text-decoration:none;color:black">view more</a></button>
            </div>
          </div>
        </div>
      </div>
        `
    )
     }
    })
})

// --------------------------------------
$.get("https://newsapi.org/v2/everything?q=latest&apiKey=06fc87f546d649ae939b37e5258e40bd",function(data){
var latestdetail=data.articles;
console.log(latestdetail);
spinner.hide();

for(let newsdetail of latestdetail ){
  firstcard.append(`
  <div class="card mb-3 " style="max-width: 1040px;margin-left:10%;" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${newsdetail.urlToImage}" class="img-fluid rounded-start" alt="..." style="height:100%;">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${newsdetail.title}</h5>
        <p class="card-text">${newsdetail.description}</p>
        <p class="card-text"><small class="text-muted">${newsdetail.publishedAt} | ${newsdetail.author}</small></p>
        <button type="button" class="btn btn-danger" ><a href="${newsdetail.url}" style="text-decoration:none;color:black">view more</a></button>
      </div>
    </div>
  </div>
</div>
  `
)
}
})
