"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/resources";
import { Flex, Spinner } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface Routes {
	children: React.ReactNode;
}

const Route: React.FC<Routes> = ({ children }) => {

  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performChecks = async () => {
      setLoading(true);
      setIsRouteEnabled(false);

      const checkRouteEnabled = () => {
        if (!pathname) return false;

        if (pathname in routes) {
          return routes[pathname as keyof typeof routes];
        }

        const dynamicRoutes = ["/blog", "/projects", "/about"] as const;
        for (const route of dynamicRoutes) {
          if (pathname?.startsWith(route) && routes[route]) {
            return true;
          }
        }

        return false;
      };

      const routeEnabled = checkRouteEnabled();
      setIsRouteEnabled(routeEnabled);
      setLoading(false);
    };

    performChecks();
  }, [pathname]);

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (!isRouteEnabled) {
		return <NotFound />;
	}

  return <>{children}</>;

};

export { Route };