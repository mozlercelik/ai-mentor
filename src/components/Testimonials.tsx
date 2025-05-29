'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    image: 'https://i.pravatar.cc/150?img=1',
    quote: 'AI Mentor has been instrumental in my career transition. The personalized guidance helped me land my dream job in tech!',
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Designer',
    image: 'https://i.pravatar.cc/150?img=2',
    quote: 'The emotional support and stress management techniques I learned through AI Mentor have transformed my work-life balance.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'HR Manager',
    image: 'https://i.pravatar.cc/150?img=3',
    quote: 'As an HR professional, I appreciate how AI Mentor helps employees develop their skills and maintain their well-being.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied users who have transformed their lives with AI Mentor
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <blockquote className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 