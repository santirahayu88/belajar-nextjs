"use server";

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

// === [TAMBAHAN BARU: Server Action untuk Hapus Pesan] ===
export async function deleteMessageAction(formData) {
  const id = formData.get("id");

  // Cari posisi/index pesan berdasarkan id
  const index = messages.findIndex((msg) => String(msg.id) === String(id));

  if (index !== -1) {
    // Hapus pesan dari array
    messages.splice(index, 1);

    // Revalidate path agar cache halaman dikosongkan & tampilan otomatis ter-update
    revalidatePath("/messages");
  }
}
// ========================================================