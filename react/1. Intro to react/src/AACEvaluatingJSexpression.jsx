// To evauluate Javascript expressions inside JSX code, we put it inside {}. When we put something into {}, it escapes JSX and instead it will be treated as pure Javascript. Whatever is inside {} is evaluated and then the result will be turned into a string and embedded into the element.
export default function AACEvaluatingJSexpression() {
    return <h2>{2 + 3}</h2>;
  }
  