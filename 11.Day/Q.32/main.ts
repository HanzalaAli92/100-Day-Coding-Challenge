let current_users : string [] = ["ahmed", "Eric", "Raheel", "Hania", "sara"]
let new_users : string [] = ["ahmed", "sara", "John", "Hamza", "Ali"]

let current_users_lower : string [] = current_users.map(user  => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.indexOf(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
        } else{
            console.log (`Yes ${new_user}, is still in avalible list`)
}
}