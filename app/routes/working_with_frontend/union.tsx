import { useCallback, useState } from "react";
import type { Route } from "./+types/union";
import {
  getCommonResponseWorkingWithFrontendUnionCommonResponseGet,
  getUnusualResponseWorkingWithFrontendUnionUnusualResponseGet,
} from "~/api/client";
import ApiCard from "./components/ApiCard";
import useApiWrap from "./hooks/useApiWrap";
import ErrorBanner from "./components/ErrorBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test React" },
    { name: "description", content: "Call APIs and display responses" },
  ];
}

export default function UnionDemoPage() {
  const { loading, error, resetError, wrap } = useApiWrap();
  const [common, setCommon] = useState<unknown>(null);
  const [unusual, setUnusual] = useState<unknown>(null);

  const onCommon = useCallback(async () => {
    const res = await wrap("common", () =>
      getCommonResponseWorkingWithFrontendUnionCommonResponseGet()
    );
    if (res) setCommon((res as any).data);
  }, [wrap]);

  const onUnusual = useCallback(async () => {
    const res = await wrap("unusual", () =>
      getUnusualResponseWorkingWithFrontendUnionUnusualResponseGet()
    );
    if (res) setUnusual((res as any).data);
  }, [wrap]);

  const resetCommon = useCallback(() => setCommon(null), []);
  const resetUnusual = useCallback(() => setUnusual(null), []);

  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-5xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">Test React</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            각 카드 우측 상단의 재생 아이콘(▶)을 눌러 API를 호출하세요. 옆의 X 아이콘으로 응답을 초기화할 수 있어요.
          </p>
        </header>

        {error && <ErrorBanner severity="error" message={error} onClose={resetError} />}

        <section className="grid gap-4 md:grid-cols-2">
          <ApiCard
            title="Common Response"
            loading={!!loading.common}
            onCall={onCommon}
            onReset={() => { resetCommon(); resetError(); }}
            data={common}
          />
          <ApiCard
            title="Unusual Response"
            loading={!!loading.unusual}
            onCall={onUnusual}
            onReset={() => { resetUnusual(); resetError(); }}
            data={unusual}
          />
        </section>
      </div>
    </main>
  );
}

