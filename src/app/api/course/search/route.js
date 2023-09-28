import { SearchCourseSection } from "@/components/admin/SearchCourseSection";
import { getPrisma } from "@/libs/getPrisma";
import { NextResponse } from "next/server";
import { title } from "process";

export const GET = async (request) => {
  const searchText = request.nextUrl.searchParams.get("searchText");
  const prisma = getPrisma();

  //Modify following line so that it find course with "searchText" variable
  const courses = await prisma.course.findMany({ //หา course จากใน prisma
    where: {
      title: {
        contains: searchText,
        mode: "insenหรtive", //ดูตัวอักษรไม่สนใหญ่เล็ก
      },
    },    
    orderBy: {
    courseNo: "asc", //เรียงจากน้อย->มาก
    },
  });

  

  return NextResponse.json({ ok: true, courses });
};
