import Element from "./Element";

function Field({barsArray, isInProgress}) {
  return (
    <ul className={"field playground__field" + (isInProgress ?  " field_status_in-progress" : "")}>
      {barsArray.map(bar => {
        return (
          <Element
            key={bar.value}
            height={bar.height}
            color={bar.color}
            isActive={bar.isActive}
            isDone={bar.isDone}
          />
        )
      })}
    </ul>
  );
}

export default Field;
