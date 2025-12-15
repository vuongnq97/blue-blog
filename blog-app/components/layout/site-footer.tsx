import {useTranslations} from "next-intl";

import {cn} from "@/lib/utils";

type SiteFooterProps = {
  className?: string;
  year: number;
};

export function SiteFooter({className, year}: SiteFooterProps) {
  const t = useTranslations("layout.footer");

  return (
    <footer className={cn("border-t border-border/60 bg-muted/40", className)}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-6 text-sm text-muted-foreground sm:px-6 md:px-8">
        <p>{t("copyright", {year})}</p>
      </div>
    </footer>
  );
}
