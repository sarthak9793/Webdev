import "./AAFStylingComponents.css";
export default function AAFStylingComponents() {
  // The conventional way of styling React components is to give our top level element an class and it is conventional to keep the class name same as component name. To specify class, we will use className instead of class because class is a reserved keyword in javascript. Now what we do is that we create a CSS file with the same name as our component(convention) and write styles for each component in a seperate file. To apply the style sheet, we will have to import it into the components javascript file. NOTE: This stylesheet is not limited to the scope of this document. If we give any other element in any other component the class name of AAFStylingComponents, the styles will also apply on them.
  return <h2 className="AAFStyingComponents">I am styled</h2>;
}
