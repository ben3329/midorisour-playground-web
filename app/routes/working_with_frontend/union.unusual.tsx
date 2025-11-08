import { useCallback, useState } from "react";
import type { Route } from "./+types/union.unusual";
import { getUnusualResponseWorkingWithFrontendUnionUnusualResponseGet } from "~/api/client";
import ApiCard from "./components/ApiCard";
import useApiWrap from "./hooks/useApiWrap";
import ErrorBanner from "./components/ErrorBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Unusual Response(React)" },
    { name: "description", content: "Call Unusual API and display response" },
  ];
}

export default function UnusualResponsePage() {
  const { loading, error, resetError, wrap } = useApiWrap();
  const [unusual, setUnusual] = useState<unknown>(null);

  const onUnusual = useCallback(async () => {
    const res = await wrap("unusual", () =>
      getUnusualResponseWorkingWithFrontendUnionUnusualResponseGet()
    );
    if (res) setUnusual((res as any).data);
  }, [wrap]);

  const resetUnusual = useCallback(() => setUnusual(null), []);

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Unusual Response(React)</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Unusual API를 호출해 응답을 확인해보세요. 오류 발생 시 초기화할 수 있어요.
          </p>
        </header>

        {error && (
          <ErrorBanner severity="error" message={error} onClose={resetError} />
        )}

        <section className="grid grid-cols-1 gap-4">
          <ApiCard
            title="Unusual Response(React)"
            loading={!!loading.unusual}
            onCall={onUnusual}
            onReset={() => {
              resetUnusual();
              resetError();
            }}
            data={unusual}
          />
        </section>
      </div>
    </main>
  );
}

