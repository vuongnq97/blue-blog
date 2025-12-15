"use client";

import {useCallback, useState} from "react";
import {MenuIcon} from "lucide-react";
import {useTranslations} from "next-intl";

import {LoginDialog} from "@/components/auth/login-dialog";
import {BaseButton} from "@/components/ui/base-button";
import {Button} from "@/components/ui/button";
import {useLogin} from "@/hooks/use-login";
import {useLayoutStore} from "@/stores/layout-store";
import {useAuthStore} from "@/stores/auth-store";
import {UserInfo} from "@/types/auth";

type SiteHeaderProps = {
  initialUser?: UserInfo | null;
};

export function SiteHeader({initialUser = null}: SiteHeaderProps) {
  const t = useTranslations("layout.header");
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);
  const {login, isLoading, error} = useLogin();
  const user = useAuthStore((state) => state.user);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginSubmit = useCallback(async (values: {username: string; password: string}) => {
    await login(values);
  }, [login]);

  const effectiveOpen = loginOpen && !user;

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle navigation"
        >
          <MenuIcon className="h-5 w-5" aria-hidden="true" />
        </Button>
        <p className="text-lg font-semibold sm:text-xl">{t("title")}</p>
        <div className="flex items-center gap-2">
          {(initialUser ?? user) ? (
            <span className="text-sm text-muted-foreground">
              {user && typeof user === "object" && "name" in user && typeof user.name === "string"
                ? user.name
                : t("signedIn")}
            </span>
          ) : (
            <BaseButton variant="outline" onClick={() => setLoginOpen(true)}>
              {t("login")}
            </BaseButton>
          )}
        </div>
      </div>
      <LoginDialog
        open={effectiveOpen}
        onOpenChange={setLoginOpen}
        onSubmit={handleLoginSubmit}
        isSubmitting={isLoading}
        errorMessage={error?.message ?? null}
      />
    </header>
  );
}
