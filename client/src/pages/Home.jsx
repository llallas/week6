import { useState } from "react";
import Box from "../components/Box.jsx";

function Home() {
  const [form, setForm] = useState({ name: "", color: "blue" });
  const [list, setList] = useState([]);

  const renderBoxes = list.map((itm, idx) => <Box key={idx} data={itm} />);

  const submit = () => {
    if (!form.name.trim()) return;
    setList((currentList) => [...currentList, { ...form, name: form.name.trim() }]);
    setForm((currentForm) => ({ ...currentForm, name: "" }));
  };

  const formEle = (
    <div>
      <input
        type="text"
        value={form.name}
        placeholder="Box name"
        onChange={(e) => setForm((currentForm) => ({ ...currentForm, name: e.target.value }))}
      />
      <select
        value={form.color}
        onChange={(e) => setForm((currentForm) => ({ ...currentForm, color: e.target.value }))}
      >
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>

      <button onClick={submit}>Submit</button>
    </div>
  );

  return (
    <>
      {formEle}
      {list.length > 0 ? renderBoxes : <h1>No Boxes to show</h1>}
    </>
  );
}

export default Home;
