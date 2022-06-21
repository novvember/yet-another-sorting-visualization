import Element from "./Element";

function Field({barsArray}) {
  return (
    <ul className="field playground__field">
      {barsArray.map(number => {
        return (
          <Element
            key={number}
            value={number}
          />
        )
      })}
    </ul>
  );
}

export default Field;
