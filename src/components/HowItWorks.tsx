'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Start a Conversation',
    description: 'Begin by sharing your thoughts, questions, or concerns with your AI mentor.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Get AI Suggestions',
    description: 'Receive personalized recommendations and insights based on your input.',
    icon: SparklesIcon,
  },
  {
    title: 'Track Your Progress',
    description: 'Monitor your growth and development with detailed analytics and insights.',
    icon: ChartBarIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Three simple steps to start your journey with AI Mentor
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 dark:bg-blue-700" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 