// https://github.com/udacity/ud989-pizzamvo
// https://github.com/udacity/ud989-retain

//    MODEL

var model = {
    currentCat: null,
    cats: [
        {
            clickCount: 0,
            name: 'Adam',
            imgSrc: 'img/adam.jpg'
        },
        {
            clickCount: 0,
            name: 'Dave',
            imgSrc: 'img/dave.jpg'
        },
        {
            clickCount: 0,
            name: 'Jetske',
            imgSrc: 'img/jetske.jpg'
        },
        {
            clickCount: 0,
            name: 'Marino',
            imgSrc: 'img/marino.jpg'
        }
    ]
}

//   Controller

var octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        // initialize views
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};

//    VIEW

var catView = {
    init: function() {
        //Store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click increment the current cat's counter
        this.catImageElem.addEventListener('click', function(e){
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {
        // Update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {
    init: function() {
        // Store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');
        this.render();
    },

    render: function() {
        // get cats we will be rendering from the octopus
        var cats = octopus.getCats();

        // Empty the catlist
        this.catListElem.innerHTML = '';

        //loop over the cats
        for(var i = 0; i < cats.length; i++){
            var cat = cats[i];
            var elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catview
            // this uses a closure-in-a-loop trick to connect the view
            // of the cat variable to the click event function
            elem.addEventListener('click', (function(cat) {
                return function() {
                    octopus.setCurrentCat(cat);
                    catView.render();
                };
            })(cat));

            this.catListElem.appendChild(elem);
        };
    }
};

octopus.init();