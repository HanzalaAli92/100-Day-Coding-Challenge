function createObjectWithDynamicKey (key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey ("dark", "theme");
    console.log(userPreference);