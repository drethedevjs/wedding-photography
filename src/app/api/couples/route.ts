import { Couple as ICouple } from "@/interface/Couple";
import Couple from "@/models/Couple";
import { connectToDatabase } from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectToDatabase();
  try {
    const couple: ICouple = await request.json();
    const newCouple = new Couple(couple);

    await newCouple.save();

    return NextResponse.json({ ok: true, couple }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to save couple" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectToDatabase();
  try {
    const couples = await Couple.find().exec();
    console.log("The Couples: ", couples);
    return NextResponse.json(couples);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to retrieve couples" },
      { status: 500 }
    );
  }
  return NextResponse.json([]);
}
