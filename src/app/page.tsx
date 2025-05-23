'use client';

import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import ChatPreview from '@/components/ChatPreview';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Home() {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-preview');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 z-0">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-purple-100/20 to-transparent dark:from-blue-900/20 dark:via-purple-900/20" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Your Personal AI Mentor,<br />
            <span className="text-blue-600 dark:text-blue-400">Anytime. Anywhere.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Get career guidance, mental wellness support, and learning assistance powered by AI.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={scrollToChat}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Try Demo
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <div id="chat-preview">
        <ChatPreview />
      </div>
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
