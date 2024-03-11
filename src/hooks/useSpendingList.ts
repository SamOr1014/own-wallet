import { useState } from "react";

export default function useSpendingList() {
  const [list, setList] = useState<Array<any>>([]);
  return {
    list,
    setList,
  };
}
