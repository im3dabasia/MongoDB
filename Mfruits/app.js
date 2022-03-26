const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');
 
const fruitSchema = new mongoose.Schema({
    name:{
        type: String 
      },
    rating:{
        type: Number,
        min: 1,
        max: 10
      },
    review:String

});
const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({ rating:4 , review: 'V good' });
// console.log(fruit.name, fruit.rating, fruit.review) ; // 'fruit'

// fruit.save()

// Fruit.updateOne({_id : "623b1bc8229bc53b33654fa3"}, {name:'Peach'},function(error){
//     if (error){
//         console.error;

//     }else{
//         console.log("Successfully Added");
//     }
// } )

// Fruit.deleteOne({_id : "623b0aef0aff737e35d5ecce"},function(error){
//         if (error){
//             console.error;
    
//         }else{
//             console.log("Deleted Successfully");
// }})



const pinappleApple = new Fruit({ name: 'pinapple Apple' ,  rating: 10 , review: 'Superb' });
// pinappleApple.save()

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema

});
const Person = mongoose.model('Person', personSchema);

const Dab = new Person({ name: 'Dab' ,  age: 22  ,favFruit: pinappleApple});


const mango = new Fruit({ name: 'Mango' ,  rating: 6 , review: 'decent' });
mango.save()


Person.updateOne({_id : "623b0d98140c1388683a8c1b"}, {favFruit:mango},function(error){
    if (error){
        console.error;

    }else{
        console.log("Successfully Added FK");
    }
} )



// console.log(Dab.name, Dab.age, Dab.favFruit ) ; // 'Dab'
// Dab.save()
// Person.deleteMany({name : 'John' },function(error){
//     if (error){
//         console.log(error)

//     }else{
//         console.log("Deleted All duplicated entries");
// }})

// person.save()

// Adding more tuples in fruits collection

// const Apple = new Fruit({ name: 'Apple' ,  rating: 1 , review: 'V bad' });
// // console.log(Apple.name, Apple.rating, Apple.review) ; // 'Apple'

// const Kiwi = new Fruit({ name: 'Kiwi' ,  rating: 7 , review: 'V ok' });
// // console.log(Kiwi.name, Kiwi.rating, Kiwi.review) ; // 'Kiwi'

// const Guava = new Fruit({ name: 'Guava' ,  rating: 4 , review: 'V awful' });
// // console.log(Guava.name, Guava.rating, Guava.review) ; // 'Guava'


// const arr = [Apple, Kiwi , Guava] ;
// Fruit.insertMany(arr, function(error) {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Success");
//     }
// });

Person.find(function (error, person) {
    if (error){
        console.error;

    }else{
        // mongoose.connection.close();
        person.forEach(element => {
            console.log(element);
        });
    }
});