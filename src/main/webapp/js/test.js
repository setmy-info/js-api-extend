function onBodyLoad() {
    var text = "Hello World";
    console.log(text.toType());
    
    text = "123.45";
    console.log(text.toType());
    
    text = "12345";
    console.log(text.toType());
    
    text = "true";
    console.log(text.toType());
    
    text = "false";
    console.log(text.toType());

    text = "yes";
    console.log(text.toType());
    
    text = "no";
    console.log(text.toType());
    
    var array = ["a", "b", "c"];
    var arrayInstance = array;
    console.log(arrayInstance);
    array.clear();
    console.log(arrayInstance);
}
