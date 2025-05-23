'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  HeartIcon, 
  LightBulbIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Career Coaching',
    description: 'Get personalized career advice and guidance to help you achieve your professional goals.',
    icon: ChartBarIcon,
  },
  {
    title: 'Emotional Support',
    description: 'Receive compassionate support and guidance for your mental well-being journey.',
    icon: HeartIcon,
  },
  {
    title: 'Smart Learning',
    description: 'Access AI-powered learning assistance and personalized study recommendations.',
    icon: AcademicCapIcon,
  },
  {
    title: 'Smart Recommendations',
    description: 'Get tailored suggestions based on your goals, preferences, and progress.',
    icon: LightBulbIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to succeed in your personal and professional journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 