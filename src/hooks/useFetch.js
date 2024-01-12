import { useEffect, useRef } from "react";

export function useFetch({loading, loadData, fetch}) {
  const countCall = useRef(0);

  useEffect(() => {
    if (countCall.current === 0) {
      loading?.();
      (async () => {
        const data = await fetch();
        loadData?.(data);
      })();
      countCall.current = 1;
    }
  }, [fetch, loadData, loading]);
}
