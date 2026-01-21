import { portfolioData } from "@shared/portfolioData";

export default async function handler(_req: any, res: any) {
  res.status(200).json(portfolioData);
}
