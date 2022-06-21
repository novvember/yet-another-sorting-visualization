import Element from "./Element";

function Field() {
  return (
    <ul className="field playground__field">
      {(new Array(100).fill('')).map((number, pos) => (<Element key={pos} />))}
    </ul>
  );
}

export default Field;
