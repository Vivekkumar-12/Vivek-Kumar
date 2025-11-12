import { z } from "zod";

// Portfolio data schema - all the information from Vivek's resume

export const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  period: z.string(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
  certificate: z.string().optional(),
  featured: z.boolean().optional(),
});

export const educationSchema = z.object({
  id: z.string(),
  institution: z.string(),
  degree: z.string(),
  location: z.string(),
  period: z.string(),
  score: z.string(),
});

export const trainingSchema = z.object({
  id: z.string(),
  title: z.string(),
  institution: z.string(),
  period: z.string(),
  description: z.array(z.string()),
});

export const certificateSchema = z.object({
  id: z.string(),
  title: z.string(),
  institution: z.string(),
  date: z.string(),
  technologies: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  certificate: z.string().optional(),
});

// User schema used by server storage
export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  // store hashed password in server-side types
  passwordHash: z.string(),
  email: z.string().optional(),
});

export const insertUserSchema = z.object({
  username: z.string(),
  passwordHash: z.string(),
  email: z.string().optional(),
});

export const achievementSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  description: z.array(z.string()),
});

export const portfolioDataSchema = z.object({
  personalInfo: z.object({
    name: z.string(),
    title: z.string(),
    tagline: z.string(),
    email: z.string(),
    phone: z.string(),
    linkedin: z.string(),
    github: z.string(),
    location: z.string(),
    cgpa: z.string(),
  }),
  skills: z.array(skillCategorySchema),
  projects: z.array(projectSchema),
  education: z.array(educationSchema),
  training: z.array(trainingSchema),
  certificates: z.array(certificateSchema),
  achievements: z.array(achievementSchema),
});

export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Project = z.infer<typeof projectSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Training = z.infer<typeof trainingSchema>;
export type Certificate = z.infer<typeof certificateSchema>;
export type Achievement = z.infer<typeof achievementSchema>;
export type PortfolioData = z.infer<typeof portfolioDataSchema>;
export type User = z.infer<typeof userSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
