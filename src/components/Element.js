function Element({height, color, isActive, isDone}) {
  let className = 'element';
  isActive && (className += " element_status_active");
  isDone && (className += " element_status_done");

  return (
    <li
      className={className}
      style={{
        height: `${height}%`,
        backgroundColor: color,
      }}
    ></li>
  );
}

export default Element;
