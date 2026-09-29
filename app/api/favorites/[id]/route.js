import { favorites } from "@/lib/db";

// === [TAMBAHAN BARU: Method PATCH untuk mengubah data/menambah note] ===
export async function PATCH(request, { params }) {
  const { id } = await params;
  
  // 1. Ambil body request dari client
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return Response.json(
      { error: "Body request tidak boleh kosong atau format JSON tidak valid" },
      { status: 400 }
    );
  }

  // 2. Validasi: Cek apakah body berbentuk objek kosong `{}`
  if (!body || Object.keys(body).length === 0) {
    return Response.json(
      { error: "Body request tidak boleh kosong untuk update" },
      { status: 400 }
    );
  }

  // 3. Cari indeks data berdasarkan ID
  const index = favorites.findIndex((f) => String(f.id) === String(id));

  if (index === -1) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  // 4. Perbarui data favorit (misalnya menambahkan/mengubah field `note`)
  favorites[index] = {
    ...favorites[index],
    ...body, // Memasukkan field baru seperti { note: "catatan pribadi" }
  };

  return Response.json({
    message: "Data favorit berhasil diperbarui",
    data: favorites[index],
  });
}
// ======================================================================

export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = favorites.findIndex((f) => String(f.id) === String(id));

  if (index === -1) {
    return Response.json({ error: "Data tidak ditemukan" }, { status: 404 });
  }

  favorites.splice(index, 1);
  return Response.json({ message: "Berhasil dihapus" });
}