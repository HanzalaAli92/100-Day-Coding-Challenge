let places: string[] = [
    "Paris",
    "London",
    "Tokyo",
    "New York",
    "Sydney",
    "Berlin",
  ];
  console.log("original :" + places);
  
  // print your array in alphabetical order without modifying the actual List.
  console.log("copy" + [...places].sort());
  
  // Show that your array is still in its original order by printing it.
  console.log("original :" + places);
  
  // Print your array in reverse alphabetical order without changing the order of the original List.
  console.log("copy " + [...places].sort().reverse());
  
  // Show that your array is still in its original order by printing it again.
  console.log("copy " + [...places].sort().reverse());
  
  // Reverse the order of your list. print the array to show that its order has Changed.
  console.log("original :" + places.sort());
  
  // Reverse the order of your list again. print the list to show it,s back to its original order.
  console.log("original :" + places.sort().reverse());
  
  // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
  console.log("Reverse alphabetical order:" + places.reverse());