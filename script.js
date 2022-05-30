
//fonction 1 + 1 bis

function click() {

  let i = 1;
  
  document.querySelector('footer').addEventListener("click", function() {
        console.log(`click n° ${i++}`)
       
});
}

click();

function hambMenu () {

    let menu = document.querySelector(".navbar-toggler");
  

    menu.addEventListener("click", function() {

        document.getElementById("navbarHeader").classList.toggle("collapse")
    
    });
    
    
}
hambMenu ();



// fonctionnalité 3

function card_one() {

    let card = document.querySelector("div.card");
   

   let btn = card.getElementsByClassName("btn btn-sm btn-outline-secondary");

    btn[0].addEventListener("click", function() {
       
    btn[0].style.color = "red";
    
});

}

card_one();



//fonctionnalité 4

function card_two() {

    let card = document.querySelectorAll("div.card");
   

   let btn = card[1].getElementsByClassName("btn btn-sm btn-outline-secondary");
   
   btn[0].style.color === 'grey'

    btn[0].addEventListener("click", function() {

        
        if (btn[0].style.color === 'grey'){
            btn[0].style.color = 'green' ;

        }else {btn[0].style.color === 'green';
        btn[0].style.color = 'grey';
        }
        });
    
};

card_two();



//fonctionnalité 5

function Delete () {

let Navbar = document.querySelector("div.navbar")

   let link = document.getElementsByTagName('link')

 
   Navbar.addEventListener('dblclick', function (){ 

        link[0].href=""
        link[0].integrity=""

        
    });
}

Delete ();

//fonctionnalité 6

function view() {

    let view = document.querySelector("div.card");
   let btn = view.getElementsByClassName("btn btn-sm btn-success");
   let img = document.querySelector("img.card-img-top");

  let card = document.getElementsByClassName("card-text");

    btn[0].addEventListener("mousemove", function() {

      

    document.getElementsByClassName("card-text")[0].innerHTML="";
    img.style.width = "20%";

});

}

view ();

