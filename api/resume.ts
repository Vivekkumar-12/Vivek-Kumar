import fs from "fs/promises";
import path from "path";

const RESUME_FILE = "Vivek_kumar_general cv 2.pdf";
const DOWNLOAD_NAME = "Vivek_Kumar_Resume.pdf";

export default async function handler(_req: any, res: any) {
  try {
    const filePath = path.join(process.cwd(), "client", "public", "certificates", RESUME_FILE);
    const fileBuffer = await fs.readFile(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=\"${DOWNLOAD_NAME}\"`);
    res.status(200).send(fileBuffer);
  } catch (error) {
    console.error("Error serving resume:", error);
    res.status(500).json({ error: "Failed to download resume" });
  }
}
