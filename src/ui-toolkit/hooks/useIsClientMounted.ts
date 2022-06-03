import { useEffect, useState } from "react";

export function useIsClientMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
