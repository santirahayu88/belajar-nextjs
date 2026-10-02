import { messages } from "@/lib/db";

// === [TAMBAHAN BARU: Import Server Action] ===
import { deleteMessageAction } from "./actions";
// =============================================

export default function MessagesPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">
                  {msg.name} — {msg.email}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {msg.message}
                </p>
              </div>

              {/* === [TAMBAHAN BARU: Form & Tombol Hapus] === */}
              <form action={deleteMessageAction}>
                <input type="hidden" name="id" value={msg.id} />
                <button
                  type="submit"
                  className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-500 transition"
                >
                  Hapus
                </button>
              </form>
              {/* ============================================= */}
            </div>
          ))
        )}
      </div>
      </div>
    </section>
  );
}
