document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    btn.innerText = "Add Square";
    document.body.appendChild(btn);
    let squareCounter = 1;

    let squareContainer = document.createElement("div");
    squareContainer.className = "container";
    document.body.appendChild(squareContainer);

    btn.addEventListener("click", function () {
        let div = document.createElement("div");
        div.className = "square";
        div.id = squareCounter++;

        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor();
        });

        div.addEventListener("dblclick", function () {
            if (div.id % 2 === 0) {
                if (div.nextElementSibling) {
                    div.nextElementSibling.remove();
                } else {
                    alert("There is no element to remove!");
                }
            } else {
                if (div.previousElementSibling) {
                    div.previousElementSibling.remove();
                } else {
                    alert("There is no element to remove!");
                }
            }

            squareCounter = squareContainer.children.length;
        });
        
        let span = document.createElement("span");
        span.className = "id-display";
        span.innerText = div.id;
        div.appendChild(span);
        
        squareContainer.appendChild(div);
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
        // #00ffff
    }
});