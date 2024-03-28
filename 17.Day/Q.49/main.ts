function logHobbies (...hobbies: string []){
    
    hobbies.forEach(hobby => {
        console.log(`I enjoy me ${hobby}.`);
    });
}
logHobbies("football", "cricket", "coding");