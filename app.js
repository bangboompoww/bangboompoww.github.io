var loader;
function loadNow(opacity) {
    if(opacity <= 0) {
        displayContent();
    }
    else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05)
        }, 80);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(2);
});



$(() => {
        $('.btn').on('click', () => {
            $('.btn').css('display','none')



        const promise = $.ajax({
            url:'https://api.jikan.moe/v3/top/anime/1/favorite',
        })
        .done(
            (data) => {
                console.log(data);
                $('.anime-images').html(data.top
                .map(anime=>{
                   return ` <div class="card">
             <img class="animeimg" src="${anime.image_url}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${anime.title}</h5>
          <a href=${anime.url} class="btn btn-primary">More information</a>
           </div>
      </div>   ` 
                                
            }))
                


            },

        
            
        )
        
       
    })
    
    })


    const button = () => {
        $('.btn').css('display','inline-block')
    }

   
    $(() => {
        load()
    })