// Some case
// 1. userEffect(callback)(Case này ít dùng )
//- Gọi callback mỗi khi component rerender
//- gọi callback sau khi component khi thêm element vào DOM
// 2. userEffect(callback, [])
// 3. userEffect(callback , [deps])

// 1. Callback luôn được gọi sau khi component mounted
import { useEffect, useState } from "react";
//side effect
function Content() {
  const [title, setTitle] = useState("");
  // useeffect(callback, [deps])
  useEffect(() => {
    console.log("Mounted");
  });
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
export default Content;
