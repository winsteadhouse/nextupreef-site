import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const email = String(body?.email ?? "").trim().toLowerCase();
    const has_apex = Boolean(body?.has_apex);

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { error } = await supabase.from("hub_waitlist").insert({
      user_id: null,
      email,
      has_apex,
      notes: "website:/hub",
    });

    // Duplicate is fine — user is already on the list, treat as success.
    if (error && !/duplicate|unique/i.test(error.message)) {
      console.error("hub_waitlist insert error:", error.message);
      return NextResponse.json({ error: "Could not save. Try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("hub-waitlist route error:", e?.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
