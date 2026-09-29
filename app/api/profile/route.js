export async function GET() {
  const profile = {
    name: "Santi Rahayu",
    role: "Peserta Bootcamp",
    favoriteTech: ["HTML", "CSS", "JavaScript", "Next.js"]
  };

  return Response.json(profile);
}