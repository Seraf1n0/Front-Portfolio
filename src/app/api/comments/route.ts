import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
// nuestra fuente de informacion increiblemente privada y segura xd
const commentsFilePath = path.join(process.cwd(), "public/data/comments-data.json");

// GET /api/comments
export async function GET() {
  try {
    const data = fs.readFileSync(commentsFilePath, "utf-8");
    const comments = JSON.parse(data);
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error al leer los comentarios:", error);
    return NextResponse.json({ error: "Error al leer los comentarios" }, { status: 500 });
  }
}

// POST /api/comments
export async function POST(req: Request) {
  try {
    const newComment = await req.json();
    const data = fs.readFileSync(commentsFilePath, "utf-8");
    const comments = JSON.parse(data);

    comments.push(newComment);

    fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2), "utf-8");
    return NextResponse.json({ message: "Comentario agregado exitosamente" }, { status: 201 });
  } catch (error) {
    console.error("Error al guardar el comentario:", error);
    return NextResponse.json({ error: "Error al guardar el comentario" }, { status: 500 });
  }
}