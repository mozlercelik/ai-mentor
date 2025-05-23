'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const tabs = [
  { id: 'career', label: 'Career', icon: LightBulbIcon },
  { id: 'wellness', label: 'Wellness', icon: HeartIcon },
  { id: 'learning', label: 'Learning', icon: AcademicCapIcon },
];

const mockMessages = {
  career: [
    { role: 'user', content: 'I want to transition into a tech career. Where should I start?' },
    { role: 'assistant', content: 'That\'s a great goal! Let\'s break this down into actionable steps. First, I recommend identifying which tech role interests you most (e.g., software development, data science, UX design). Then, we can create a learning roadmap tailored to your background and goals.' },
  ],
  wellness: [
    { role: 'user', content: 'I\'ve been feeling overwhelmed with work lately.' },
    { role: 'assistant', content: 'I understand that feeling. Let\'s explore some stress management techniques that might help. Would you like to try some mindfulness exercises or discuss specific work-life balance strategies?' },
  ],
  learning: [
    { role: 'user', content: 'How can I improve my learning efficiency?' },
    { role: 'assistant', content: 'I\'d be happy to help you optimize your learning process! Some effective strategies include spaced repetition, active recall, and the Feynman technique. Which of these would you like to explore first?' },
  ],
};

export default function ChatPreview() {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience AI Mentor
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how our AI mentor can help you in different aspects of life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5 mx-auto mb-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Chat Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {mockMessages[activeTab as keyof typeof mockMessages].map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors">
                <PaperAirplaneIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 