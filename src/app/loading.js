import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="h-[92vh] w-full bg-zinc-900 flex items-center justify-center">
            <Skeleton className="w-[300px] h-[200px] rounded-md bg-zinc-200 flex items-center justify-center">
                <p className="text-zinc-900 text-xl font-bold">Loading...</p>
            </Skeleton>
        </div>
    )
}
