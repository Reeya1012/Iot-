// Portfolio Item FIlter

const filterContainer=document.querySelector(".portfolio-filter"),
	  filterBtns=filterContainer.children,
	  totalFilterBtn=filterBtns.length,
	  portfolioItems=document.querySelectorAll(".portfolio-item"),
	  totalPortfolioItem=portfolioItems.length;
	  for(let i=0; i<totalFilterBtn; i++){
	  	filterBtns[i].addEventListener("click", function(){
	  		filterContainer.querySelector(".active").classList.remove("active");
	  		this.classList.add("active");
	  		const filterValue=this.getAttribute("data-filter");
	  		for (let k=0; k<totalPortfolioItem; k++){
	  			if(filterValue === portfolioItems[k].getAttribute("data-catagory")){
	  				portfolioItems[k].classList.remove("hide");
	  				portfolioItems[k].classList.add("show");
	  			}
	  			else{portfolioItems[k].classList.remove("show");
	  				portfolioItems[k].classList.add("hide");
	  			}
	  			if (filterValue === "all"){
	  				portfolioItems[k].classList.remove("hide");
	  				portfolioItems[k].classList.add("show");
	  			}
	  		}
	  	})
	  }

// Portfolio Lightbox

const lightbox = document.querySelector(".lightbox"),
	  lightboxImg = lightbox.querySelector(".lightbox-img"),
	  lightboxClose = lightbox.querySelector(".lightbox-close"),
	  lightboxText = lightbox.querySelector(".caption-text"),
	  lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;
for(let i=0; i<totalPortfolioItem; i++){
	portfolioItems[i].addEventListener("click",function(){
		itemIndex=i;
		changeItem();
		toggleLightbox();
	})
}

function toggleLightbox(){
	lightbox.classList.toggle("open");
}

function nextItem(){
	if (itemIndex === totalPortfolioItem-1){
		itemIndex=0;
	}
	else{
		itemIndex++
	}
	changeItem();
}

function prevItem(){
	if (itemIndex === 0){
		itemIndex=totalPortfolioItem-1;
	}
	else{
		itemIndex--;
	}
	changeItem();
}


function changeItem(){
	imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	lightboxImg.src=imgSrc;
	lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
	lightboxCounter.innerHTML=itemIndex+1 + " of " + totalPortfolioItem;
}

// close lightbox

lightbox.addEventListener("click",function(event){
	if(event.target === lightboxClose || event.target === lightbox){
		toggleLightbox();
	}
})


// testimonial slider 
(()=>{
    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);

    // set width of all slides
    slides.forEach((slide)=>{
        slide.style.width = slideWidth + "px";
    })
    // set width of sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px";
    nextBtn.addEventListener("click", ()=>{
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slider();

    })

    prevBtn.addEventListener("click",()=>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider();
    })

    function slider(){
        // deactivate existing active slides
        sliderContainer.querySelector(".testi-item.active").classList.remove("active");
        // activate new slide
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }
    slider();

})();
