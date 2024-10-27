export default function AABReturningMultipleElements() {
    // Returning multiple elements.
  
    // Method 1: Enclosing the multiple elements in a single element. It is better syntax to wrap them around () but it is not necessary
    // return (
    //   <form>
    //     {/* Self closing tags must be explicitly closed */}
    //     <input type="text"/>
    //     <br/>
    //     <input type="password"/>
    //   </form>
    // );
    // Method 2: Using React fragments. The empty wrapper element <></> wont be added to the DOM, only the elements inside will be added
    return (
      <>
        {/* Self closing tags must be explicitly closed */}
        <input type="text" />
        <br />
        <input type="password" />
      </>
    );
  }
  