
window.addEventListener ("load", myMain, false);

function myMain() {

    piecesOfURL = document.URL.split("/")

    currentBottomPage = piecesOfURL[piecesOfURL.length-2]

    if (!parseInt(currentBottomPage)) {
        currentBottomPage = 1;
    }

    document.addEventListener('scroll', function (event) {
        if (document.body.scrollHeight == 
            document.body.scrollTop + window.innerHeight) {

            currentBottomPage++;
            $.get("http://www.makeuseof.com/page/" + currentBottomPage, function(data){
        
                specialDiv = document.createElement('div');
                specialDiv.innerHTML = data;
                var elements = specialDiv.childNodes;
                
                window.location.hash = currentBottomPage;
                $(specialDiv).find(".blc_posts").each( function(){ $(".blc_posts").last().after(this) } );
                
            })
           
            
        }
    });

}