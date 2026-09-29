import { favorites } from "@/lib/db";

export async function GET() {
  return Response.json(favorites);
}

export async function POST(request) {
  // === [TAMBAHAN BARU: Mencegah error jika body yang dikirim benar-benar kosong] ===
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return Response.json(
      { error: "Body request tidak boleh kosong atau format JSON tidak valid" },
      { status: 400 }
    );
  }
  // ==============================================================================

  // === [TAMBAHAN BARU: Validasi jika body berbentuk objek kosong `{}`] ===
  if (!body || Object.keys(body).length === 0) {
    return Response.json(
      { error: "Body request tidak boleh kosong" },
      { status: 400 }
    );
  }
  // =======================================================================

  if (!body.id || !body.name) {
    return Response.json(
      { error: "id dan name wajib diisi" },
      { status: 400 }
    );
  }

  const alreadyExists = favorites.some((f) => f.id === body.id);
  if (alreadyExists) {
    return Response.json(
      { error: "User ini sudah difavoritkan" },
      { status: 400 }
    );
  }

  favorites.push(body);
  return Response.json(body, { status: 201 });
}