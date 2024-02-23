var json = [{
    "id": "Abhishek",
    "msg": "iterating over all loops in json(for, for in, for of, forEach)",
    "mail": "abhiraghavd@gmail.com"
}];
for(let i=0; i<json.length; i++){
    var obj = json[i];
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.mail);
}
json.forEach(
    function(obj) {
        console.log(obj.msg);
    }
);

for(let key in json){
    if(json.hasOwnProperty(key)){
        console.log(json[key].id);
        console.log(json[key].msg);
    }
}
let text = "";
for(let x of json[key].id) {
    text += x;
}
console.log(text);