var hotels = document.getElementById("id-all-hotels");

let cart = JSON.parse(localStorage.getItem("cart"));
console.log("cart:", cart)






var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "container");
hotels.append(mainDiv);




function showProducts() {

    mainDiv.innerHTML = null;
    cart.map(function (item) {
        var imageDiv = document.createElement("div");

        imageDiv.className = "image-class";
        var newdiv = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", item.image_url);
        img.id = "img-id-hotels"

        var paradiv = document.createElement("div");
        paradiv.id = "para-div-id";
        var h3 = document.createElement("h1");
        h3.textContent = item.name;
        h3.className = "class-name";
        var paragraph = document.createElement("p");
        paragraph.innerHTML = item.detail + "<br>" + "Reserve Now pay later.";
        paragraph.className = "class-details";


        var review = document.createElement("review");
        review.className = "review-class"
        review.innerHTML = item.review + " / " + " 5 " + "Good  ( " + item.viewreview + " ) review";
        var viewreview = document.createElement("p");

        var paragraph1 = document.createElement("p");
        paragraph1.textContent = item.location;
        paragraph1.className = "class-location"
        var pricediv = document.createElement("div");
        pricediv.className = "class-price";

        var offer = document.createElement("span");
        offer.textContent = item.offer;
        offer.id = "offer-id";
        var h2 = document.createElement("h2");

        h2.innerHTML = "Rs " + item.MRP + "<br>" + `<p id="per-night">pernight<br>Includes taxes & fees</p>`;
        h2.id = "item-price";

        h2.onclick = function () {
            addtocard(item);
            window.location = "cart.html"


        };
        let addtocard_btn = document.createElement("button");
        addtocard_btn.innerText = "Reserve";
        addtocard_btn.className = "btn-btn-reserve"

        addtocard_btn.onclick = function () {
            window.location = "payment.html"

            addtocard(item);
        };


        newdiv.append(img);
        paradiv.append(h3, paragraph1, paragraph, review);
        pricediv.append(offer, h2, addtocard_btn);
        imageDiv.append(newdiv, paradiv, pricediv);

        mainDiv.append(imageDiv);
    });


}
showProducts();

function openForm() {
    document.getElementById("myForm1").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm1").style.display = "none";
}