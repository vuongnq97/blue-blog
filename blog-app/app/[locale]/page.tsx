import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {t("welcome")}
      </h1>
      <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
        {t("description")}
      </p>
    </section>
  );
}
