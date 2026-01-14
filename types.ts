
export enum AppTab {
  HOME = 'home',
  COMMUNITY = 'community',
  STUDY = 'study',
  PROFILE = 'profile',
  AI_PRACTICE = 'ai_practice'
}

export interface MovieTheme {
  id: string;
  title: string;
  clipCount: number;
  imageUrl: string;
}

export interface DailyClip {
  id: string;
  title: string;
  subtitle: string;
  difficulty: '初级' | '中级' | '高级';
  count: string;
  imageUrl: string;
  avatars: string[];
}
