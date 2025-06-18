import React, { createContext, useContext, useState } from 'react';
import { useAuth } from '../App';

interface Message {
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

interface MessageContextType {
  messages: Message[];
  sendMessage: (to: string, toName: string, toRole: 'admin' | 'client' | 'writer', subject: string, content: string, parentId?: string) => void;
  getUserMessages: () => Message[];
  markAsRead: (messageId: string) => void;
  deleteMessage: (messageId: string) => void;
  getUnreadCount: () => number;
  replyToMessage: (messageId: string, content: string) => void;
  getMessageById: (messageId: string) => Message | undefined;
  getAllUsers: () => Array<{email: string, name: string, role: 'admin' | 'client' | 'writer'}>;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error('useMessages must be used within a MessageProvider');
  }
  return context;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      from: 'admin@highdaLink.com',
      fromName: 'Admin User',
      fromRole: 'admin',
      to: 'john@client.com',
      toName: 'John Client',
      toRole: 'client',
      subject: 'Welcome to HighDALink',
      content: 'Welcome to our platform! Your Authority Pro package has been activated and we are excited to start working on your link building campaign. Our team will begin outreach within 24 hours.',
      timestamp: '2024-01-28T10:30:00Z',
      read: false,
    },
    {
      id: '2',
      from: 'admin@highdaLink.com',
      fromName: 'Admin User',
      fromRole: 'admin',
      to: 'jane@writer.com',
      toName: 'Jane Writer',
      toRole: 'writer',
      subject: 'New Assignment Available',
      content: 'You have a new writing assignment for TechCorp Inc. The topic is "Future of SaaS Technology" and should be 2000 words. Please check your assignments tab for full details.',
      timestamp: '2024-01-28T14:15:00Z',
      read: false,
    },
    {
      id: '3',
      from: 'jane@writer.com',
      fromName: 'Jane Writer',
      fromRole: 'writer',
      to: 'admin@highdaLink.com',
      toName: 'Admin User',
      toRole: 'admin',
      subject: 'Question about TechCorp Assignment',
      content: 'Hi, I have a question about the TechCorp assignment. Could you provide more specific guidelines about the target audience and tone?',
      timestamp: '2024-01-28T16:45:00Z',
      read: true,
    }
  ]);

  const sendMessage = (to: string, toName: string, toRole: 'admin' | 'client' | 'writer', subject: string, content: string, parentId?: string) => {
    if (!user) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      from: user.email,
      fromName: user.name,
      fromRole: user.role,
      to,
      toName,
      toRole,
      subject,
      content,
      timestamp: new Date().toISOString(),
      read: false,
      parentId,
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const getUserMessages = () => {
    if (!user) return [];
    return messages.filter(msg => msg.to === user.email || msg.from === user.email)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  };

  const markAsRead = (messageId: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg
    ));
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  };

  const getUnreadCount = () => {
    if (!user) return 0;
    return messages.filter(msg => msg.to === user.email && !msg.read).length;
  };

  const replyToMessage = (messageId: string, content: string) => {
    const originalMessage = messages.find(msg => msg.id === messageId);
    if (originalMessage && user) {
      sendMessage(
        originalMessage.from,
        originalMessage.fromName,
        originalMessage.fromRole,
        `Re: ${originalMessage.subject}`,
        content,
        messageId
      );
    }
  };

  const getMessageById = (messageId: string) => {
    return messages.find(msg => msg.id === messageId);
  };

  const getAllUsers = () => {
    return [
      { email: 'admin@highdaLink.com', name: 'Admin User', role: 'admin' as const },
      { email: 'john@client.com', name: 'John Client', role: 'client' as const },
      { email: 'jane@writer.com', name: 'Jane Writer', role: 'writer' as const },
      { email: 'sarah@writer.com', name: 'Sarah Johnson', role: 'writer' as const },
      { email: 'mike@writer.com', name: 'Mike Chen', role: 'writer' as const },
      { email: 'emma@writer.com', name: 'Emma Wilson', role: 'writer' as const },
    ];
  };

  return (
    <MessageContext.Provider value={{
      messages,
      sendMessage,
      getUserMessages,
      markAsRead,
      deleteMessage,
      getUnreadCount,
      replyToMessage,
      getMessageById,
      getAllUsers
    }}>
      {children}
    </MessageContext.Provider>
  );
};