function Element({height, color, isActive, isDone}) {

  return (
    <li
      className={"element" + (isActive ? " element_status_active" : '') + (isDone ? " element_status_done" : '')}
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    ></li>
  );
}

export default Element;
