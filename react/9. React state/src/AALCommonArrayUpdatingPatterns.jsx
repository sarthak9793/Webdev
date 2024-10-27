// This is a recap of somethings we have already done like adding to an array and removing an element from an array, and some new things like updating all elements in an array and modifying a particular element in an array. 

// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Easy Bake Oven", price: 28 },
    { id: 3, product: "Peach Pie", price: 6.5 },
  ];
  
  // ADDING TO AN ARRAY
  [...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];
  
  // REMOVING AN ELEMENT
  
  shoppingCart.filter((item) => item.id !== 2);
  
  // UPDATING ALL ELEMENTS IN AN ARRAY
  
  shoppingCart.map((item) => {
    return {
      ...item,
      product: item.product.toLowerCase(),
    };
  });
  
  // MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
  
  shoppingCart.map((item) => {
    if (item.id === 3) {
      return { ...item, price: 10.99 };
    } else {
      return item;
    }
  });
  