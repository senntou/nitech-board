import { getCourseList } from "@/repositories/course";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  const courseList = await getCourseList();
  return NextResponse.json(courseList, { status: 200 });
}
