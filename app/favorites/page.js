"use client";

import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative">
      {/* Background grid identik dengan halaman Contact */}
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      {/* Container utama dengan max-w-6xl, px-6, dan py-20 agar posisi konsisten */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Header section persis seperti struktur tulisan di Contact */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Favorite</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            My Favorite Users
          </h1>

          <p className="mt-4 text-muted-foreground">
            Data ini diambil langsung dari FavoriteContext.
          </p>
        </div>

        {/* Konten Grid User Cards */}
        <div className="mt-12">
          {favorites.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-12 text-center">
              <p className="text-muted-foreground">Belum ada user favorit.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}