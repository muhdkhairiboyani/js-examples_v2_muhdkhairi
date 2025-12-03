// storing objects inside an object
const arrCategories = new Array(
    { name: "Cat A", description: "Cars below 1600cc" },            // object [0] name and description are properties
    { name: "Cat B", description: "Cars above 1600cc" },            // object [1] name and description are properties
    { name: "Cat C", description: "Goods Vehicles and Buses" },     // object [2] name and description are properties
);

console.log(arrCategories.length); // logging the array of objects to the console

//access arrCategories index '0' - property 'name' and 'description'
console.log(arrCategories[0].name);

console.log("\nFor Loop Output:");
// print out all categories's name and description using a for loop
for (let i = 0; i < arrCategories.length; i++) {
    console.log(arrCategories[i].name, arrCategories[i].description); // print only the name property of the object at index i 
    // console.log(arrCategories[i]); // print the whole object at index i     
    // console.log(`Category Name: ${arrCategories[i].name}, Description: ${arrCategories[i].description}`); 
}

console.log("\nPush Output:");
arrCategories.push({ name: "Cat E", description: "Open Category" }); // adding a new object to the array
console.log(arrCategories[i].name, arrCategories[i].description); 

console.log("\nForEach Loop Output:");

arrCategories.forEach((element) => {
    console.log(element.name, element.description);
});