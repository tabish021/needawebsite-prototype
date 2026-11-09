import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
  const HOST = "needawebsite.in";

  if (!INDEXNOW_KEY) {
    return NextResponse.json({ error: "INDEXNOW_KEY missing" }, { status: 500 });
  }

  try {
    const { urls } = await request.json();

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.ok || response.status === 202) {
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: "Failed to ping IndexNow" }, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
