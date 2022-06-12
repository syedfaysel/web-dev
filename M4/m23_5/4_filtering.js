

const products = [
    {name:"iPhone", price: 3000, color: "red"},
    {name:"samsung", price: 1800, color: "white"},
    {name:"oppo", price: 1320, color: "black"},
    {name:"vivo", price: 1200, color: "blue"},
    {name:"mi", price: 2000, color: "yellow"},
];


for (const product of products){
    // console.log(product);

    if(product.price<1500){
        continue;
    }
    console.log(product);
}