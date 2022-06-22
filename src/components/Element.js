function Element({height, color}) {

  return (
    <li
      className="element"
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    ></li>
  );
}

export default Element;
