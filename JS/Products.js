/*create array of webshop objects*/
var products = [{name:"Lilla huset på prärien", price:147, descr:"En bra bok om hus på prärier", image:"https://img.tradera.net/medium/569/262506569_c5b3832e-3f52-4700-adeb-2804abdb8783.jpg"},

    {name:"möss och människor", price:159, descr:"Lenny dödar möss", image:"http://3.bp.blogspot.com/-u2kKHrfUrZc/TwcMwgurjkI/AAAAAAAAFGY/E6hrR7FbcFk/s1600/0078.jpg"},

    {name:"Lotus Blues", price:210, descr:"nån dör, andra letar", image:"http://www.piratforlaget.se/app/uploads/2014/05/lotusblues-194x300.jpg"}];
console.log(products);

/*Targeting/creating HTML-elements*/
var body = document.querySelector('body');
var list = document.createElement('UL');
body.append(list);

/*populate webshop function*/
for(var i = 0; i<products.length; i++) {
    /*Create li-element*/
    var object = document.createElement('LI');
    /*place within ul 'list' */
    list.appendChild(object);

    /*create all elements for each li-item*/
    var title = document.createElement('H4');
    var price = document.createElement('P');
    var descrition = document.createElement('ARTICLE');
    var image = document.createElement('IMG');

    /*place previously created elements within each li-item*/
    object.appendChild(title);
    object.appendChild(price);
    object.appendChild(descrition);
    object.appendChild(image);

    /*fill elements with information stored in array*/
    title.appendChild(document.createTextNode(products[i].name));
    price.appendChild(document.createTextNode(products[i].price+" Kr"));
    descrition.appendChild(document.createTextNode(products[i].descr));
    image.src=products[i].image;

}