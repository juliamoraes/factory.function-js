const circle ={
    radius: 1, 
    location:{
    x: 1,
    y: 1
    },
    
    draw: function() {
        console.log(`draw`);
    }
}

circle.draw();

const circle ={
    radius: 2, 
    location:{
    x: 2,
    y: 2
    },
    
    draw: function() {
        console.log(`draw`);
    }
}

circle.draw();
const circle ={
    radius: 1, 
    location:{
    x: 3,
    y: 3
    },
    
    draw: function() {
        console.log(`draw`);
    }
}
//factory function
function createCircle(radius){
    return{
        radius, 
        location:{
        x: 3,
        y: 3
        },
        
        draw: function() {
            console.log(`draw`);
        }
    }
}
const circle = createCircle(1);
circle.draw();
