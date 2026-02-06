export const runtime = "edge";

export async function POST() {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Contact service temporarily disabled"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
