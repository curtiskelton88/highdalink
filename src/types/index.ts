export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'writer';
  avatar?: string;
  isNewUser?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  published: boolean;
  featured?: boolean;
}

export interface Message {
  id: string;
  from: string;
  fromName: string;
  fromRole: 'admin' | 'client' | 'writer';
  to: string;
  toName: string;
  toRole: 'admin' | 'client' | 'writer';
  subject: string;
  content: string;
  timestamp: string;
  read: boolean;
  parentId?: string;
}