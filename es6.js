let age = 17
let person = {
    name: "hehe",
    age: 20,
    getInfo:function(){
        console.log(this)
    }
}

person.getInfo()