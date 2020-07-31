for(var i = 0; i < 10; i++) {
    setInterval(function() {
        console.log(i);
        
    }.bind(null,i),1000)
}