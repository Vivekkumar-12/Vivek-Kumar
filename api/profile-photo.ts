import fs from "fs/promises";
import path from "path";

const PHOTO_FILE = "profile photo_1761752240811.jpeg";

export default async function handler(_req: any, res: any) {
  try {
    const filePath = path.join(process.cwd(), "attached_assets", PHOTO_FILE);
    const fileBuffer = await fs.readFile(filePath);

    res.setHeader("Content-Type", "image/jpeg");
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error("Error serving profile photo:", error);
    res.status(500).json({ error: "Failed to load profile photo" });
  }
}
