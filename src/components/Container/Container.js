export default function Container(props) {
  const classes = `container ${props.classes}`;
  return <div className={classes}>{props.children}</div>;
}
