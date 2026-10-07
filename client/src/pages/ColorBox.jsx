import { useParams } from "react-router-dom";

function ColorBox() {
  const { color } = useParams();

  const style = {
    height: "100px",
    width: "100px",
    border: "1px solid black",
    backgroundColor: color,
  };

  return <div style={style}>{`I am a box that is ${color}`}</div>;
}

export default ColorBox;
