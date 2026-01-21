import { portfolioData } from "../server/data/portfolioData";

export default async function handler(_req: any, res: any) {
  res.status(200).json(portfolioData);
}
