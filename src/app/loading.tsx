export default function Loading() {
  return (
    <div className="grid grid-cols-[448px_1fr] gap-12 p-6">
      <div>
        <div className="flex w-full flex-col items-center justify-start p-6">
          <div className="mb-6 aspect-square w-full max-w-[200px] animate-pulse rounded-full bg-zinc-200 p-6" />
          <div className="mb-1 h-8 w-full max-w-[150px] animate-pulse rounded-full bg-zinc-200" />
          <div className="mb-4 h-4 w-full max-w-[180px] animate-pulse rounded-full bg-zinc-200" />
          <div className="h-6 w-full max-w-[150px] animate-pulse rounded-full bg-zinc-200" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="h-8 w-full max-w-[130px] animate-pulse rounded-md bg-zinc-200" />

        <div className="flex flex-1 flex-col gap-4">
          <div className="h-[140px] w-full animate-pulse rounded-md bg-zinc-200" />
          <div className="h-[140px] w-full animate-pulse rounded-md bg-zinc-200" />
          <div className="h-[140px] w-full animate-pulse rounded-md bg-zinc-200" />
          <div className="h-[140px] w-full animate-pulse rounded-md bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}
