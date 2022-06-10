

const products = [
    {name:"iPhone", price: 3000, color: "red"},
    {name:"samsung", price: 1800, color: "white"},
    {name:"oppo", price: 1320, color: "black"},
    {name:"vivo", price: 1200, color: "blue"},
    {name:"mi", price: 2000, color: "yellow"},
];

/*
for (const item of products){
    console.log(item); // full object inside the list
    console.log(item.name); // only name
    console.log(item.color); //only color
    console.log(item.price); // only price
}
*/

// searching product function 

function searchProduct(products, searchText){

    const results = []
    for (const product of products){
        if (product.name.includes(searchText)){
            // console.log(product.name)
            results.push(product);
        }
    }
    return results;
}

var matched = searchProduct(products, "i");
console.log(matched);