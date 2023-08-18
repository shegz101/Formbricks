"use client";
import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.init({
      environmentId: "cll80ntqw00gpql0hfvvtmd0k",
      apiHost: "https://app.formbricks.com",
      debug: true, // remove when in production
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}
