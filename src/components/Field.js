import Element from "./Element";

function Field({barsArray}) {
  return (
    <ul className="field playground__field">
      {barsArray.map(bar => {
        return (
          <Element
            key={bar.value}
            height={bar.height}
            color={bar.color}
          />
        )
      })}
    </ul>
  );
}

export default Field;
