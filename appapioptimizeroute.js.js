export async function POST(req) {
  const { assets } = await req.json();

  const weight = (1 / assets.length).toFixed(2);

  return Response.json({
    strategy: "Balanced Portfolio",
    allocation: assets.map((a) => ({ asset: a, weight })),
    expectedReturn: "8.5%",
    risk: "Medium"
  });
}