export default function Loading() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center py-16">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-border border-t-secondary" />
        <p className="text-sm text-muted-foreground">Loading…</p>
      </div>
    </div>
  );
}
