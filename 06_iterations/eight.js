const myNums = [1, 2, 3]

//const myTotal = myNums.reduce( function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
//}, 0)

//console.log(myTotal);


//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
//console.log(myTotal);



const shoppingcart = [
    {
        itemname: "js course",
        price: 6000
    },

    {
        itemname: "java course",
        price: 9000
    },
    {
        itemname: "data science course",
        price: 60000
    }
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);
