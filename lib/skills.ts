import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  content: string;
}

export async function getSkills(): Promise<SkillItem[]> {
  const skillsDirectory = path.join(process.cwd(), 'skills');
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(skillsDirectory);
  } catch {
    return [];
  }

  const skillsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(skillsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      const matterResult = matter(fileContents);
      
      return {
        id,
        name: matterResult.data.name || id,
        description: matterResult.data.description || '',
        content: matterResult.content,
      };
    });

  return skillsData;
}
