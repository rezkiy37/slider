let slider = document.getElementById("slider"),
    sliderItem = document.getElementsByClassName("slider-item"),
    sliderLength = sliderItem.length,
    sliderControle = document.getElementById('slider-controle');

console.log("Amount of slider items is " + sliderLength);

// create dots
let dot = document.getElementsByClassName('dot');

for (i = 0; i < sliderLength; i++) {
    let dot = document.createElement("span");

    dot.className = "dot";
    dot.dataset.dot = i;
    dot.innerText = i;

    console.log(dot);

    sliderControle.appendChild(dot);
}

// show only first item
showItem(0);

//console.log(dot);

// click on dot
sliderControle.addEventListener('click', function (event) {
    let dotActive = document.querySelectorAll('.slider-controle > span'),
        dotData = event.target.attributes[1].value;

    console.log(dotData);


    for (let i = 0; i < sliderLength; i++) {
        if (i == dotData) {
            sliderItem[i].style.display = "flex";

            sliderItem[i].classList.add('active-item');
            dotActive[i].classList.add('active-dot');
        }
        else if (dotData == 'slider-controle') {
            console.log('Click on controle');
        }
        else {
            sliderItem[i].style.display = "none";

            sliderItem[i].classList.remove('active-item');
            dotActive[i].classList.remove('active-dot');
        }
    }

});

//create arrows
let sliderTrack = document.getElementById('slider-track');

for (i = -1; i < 2; i++) {
    arrow = document.createElement('button');
    arrow.dataset.arrow = i;
    arrow.className = "arrow";

    if (i === -1) {
        arrow.classList.add("prev");

        sliderTrack.appendChild(arrow);

        console.log(arrow.className);
    }
    else if (i === 0) {

    }
    else {
        arrow.classList.add("next");

        sliderTrack.appendChild(arrow);

        console.log(arrow.className);
    }
}

sliderTrack.addEventListener('click', function (event) {

    let activeItem = document.getElementsByClassName('active-item'),
        activeItemId = activeItem[0].id,
        arrowData = event.target.attributes[0].value,

        activeItemIdNum = Number(activeItemId),
        arrowDataNum = Number(arrowData);


    switch (arrowData) {
        case "-1":
            console.log('-1 arrow');

            console.log(activeItemId);

            showItem(activeItemIdNum + arrowDataNum);


            break;

        case "1":
            console.log('1 arrow');

            console.log(activeItemId);

            showItem(activeItemIdNum + arrowDataNum);

            break;
    }

});

function showItem(b) {
    let dotActive = document.querySelectorAll('.slider-controle > span');

    if (b >= 0 && b < sliderLength) {
        for (let i = 0; i < sliderLength; i++) {
            if (i === b) {
                sliderItem[i].style.display = "flex";

                sliderItem[i].classList.add('active-item');
                dotActive[i].classList.add('active-dot');

            }
            else {
                sliderItem[i].style.display = "none";

                sliderItem[i].classList.remove('active-item');
                dotActive[i].classList.remove('active-dot');
            }
        }
    }
    else {
        console.log('error');
    }
}