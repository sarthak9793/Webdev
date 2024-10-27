/* Instead of having 
    <AADDie/>
    <AADDie/>
    <AADDie/>
    Instead of writing <AADDie> three times, we can make a component for that. This is called component decomposition. Component decomposition refers to the practise of breaking down bigger components into smaller components
*/
import AADDie from "./AADDie.jsx";
export default function AAEComponentDecomposition() {
  return (
    <div>
      <hr />
      <AADDie />
      <AADDie />
      <AADDie />
    </div>
  );
}
