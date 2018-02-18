var products = [{name:"Lilla huset på prärien", price:147, descr:"En bra bok om hus på prärier", image:"https://img.tradera.net/medium/569/262506569_c5b3832e-3f52-4700-adeb-2804abdb8783.jpg"},

    {name:"möss och människor", price:159, descr:"Lenny dödar möss", image:"http://3.bp.blogspot.com/-u2kKHrfUrZc/TwcMwgurjkI/AAAAAAAAFGY/E6hrR7FbcFk/s1600/0078.jpg"},

    {name:"Lotus Blues", price:210, descr:"nån dör, andra letar", image:"http://www.piratforlaget.se/app/uploads/2014/05/lotusblues-194x300.jpg"}];
console.log(products);

var body = document.querySelector('body');
var list = document.createElement('UL');
body.prepend(list);

for(var i = 0; i<products.length; i++) {
    var object = document.createElement('LI');
    list.appendChild(object);
    var title = document.createElement('H4');
    var price = document.createElement('P');
    var descrition = document.createElement('ARTICLE');
    var image = document.createElement('IMG');
    object.appendChild(title);
    object.appendChild(price);
    object.appendChild(descrition);
    object.appendChild(image);

    title.appendChild(document.createTextNode(products[i].name));
    price.appendChild(document.createTextNode(products[i].price+" Kr"));
    descrition.appendChild(document.createTextNode(products[i].descr));
    image.src=products[i].image;

}