import { NextResponse } from 'next/server';
import { getSkills } from '@/lib/skills';

export async function GET() {
  try {
    const skills = await getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to load skills' }, { status: 500 });
  }
}
