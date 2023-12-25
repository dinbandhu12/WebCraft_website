const filterItem = document.querySelector(".button-group");
const filterImg = document.querySelectorAll(".image");

window.onload = () => {
    filterItem.onclick = (selectedItem) => {    // once user clicks on filterItem div
        if(selectedItem.target.classList.contains("btn")) { // if user click element has .item class
            filterItem.querySelector(".active").classList.remove("active"); // remove the active class which is in first element
            selectedItem.target.classList.add("active"); // add that active class on user selected element
            let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of user selected item and store in a filtername variable
            filterImg.forEach((image) => {
                let filterImges = image.getAttribute("data-name"); // getting image data-name value
                if((filterImges == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for(let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)"); // adding onclick attribute in all available images
    }
}


// Image Preview

const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");


// full scree preview image function
function preview(element) {

    // document.querySelector("body").style.overflow = "hidden"; // hide the scroll bar of body, so user cant scroll up or down

    let selectedPrevImg = element.querySelector("img").src; // getting user clicked image source link and stored in a variable
    let selectedImgCategory = element.getAttribute("data-name"); // getting user clicked image data-name value
    
    categoryName.textContent = selectedImgCategory; // passing user clicked data-name value in category name
    previewImg.src = selectedPrevImg; // passing the user clicked image source in preview image source
    previewBox.classList.add("show");   // show the preview box
    shadow.classList.add("show");   // show the light grey background
    
    closeIcon.onclick = () => {    // if user clicks on close icon of preview box
        previewBox.classList.remove("show");    // hide the preview box on close icon click
        shadow.classList.remove("show");    // hide the light grey background on close icon click
        // document.querySelector("body").style.overflow = "scroll"; // show the scroll bar on body
    
    }
}






