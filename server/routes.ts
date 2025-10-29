import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { portfolioData } from "./data/portfolioData";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get portfolio data
  app.get('/api/portfolio', (req, res) => {
    res.json(portfolioData);
  });

  // Serve resume PDF
  app.get('/api/resume', (req, res) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'Vivek_kumar__1761752233424.pdf');
    res.download(resumePath, 'Vivek_Kumar_Resume.pdf', (err) => {
      if (err) {
        console.error('Error downloading resume:', err);
        res.status(500).json({ error: 'Failed to download resume' });
      }
    });
  });

  // Serve profile photo
  app.get('/api/profile-photo', (req, res) => {
    const photoPath = path.join(process.cwd(), 'attached_assets', 'profile photo_1761752240811.jpeg');
    res.sendFile(photoPath, (err) => {
      if (err) {
        console.error('Error serving profile photo:', err);
        res.status(500).json({ error: 'Failed to load profile photo' });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
