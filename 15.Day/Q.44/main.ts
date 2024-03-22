function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for(let i = 0; i < items.length; i++){
        console.log(`-  ${items[i]}`)
   }
}
console.log("enjoy your sandwich sir/madam")

sandwich('chicken','cheese', 'bacon')
sandwich('turkey','avocado')
sandwich('beef','lettuce','tomato')