// src/pages/Blog.jsx
import React from 'react';

const blogPosts = [
  {
    title: 'How CFD is Changing Aerospace Design',
    date: 'June 9, 2025',
    summary: 'Explore how Computational Fluid Dynamics is streamlining jet design, reducing wind tunnel dependency, and enabling faster R&D.',
  },
  {
    title: 'GPU Computing in Modern AI Workflows',
    date: 'May 30, 2025',
    summary: 'Learn how CUDA and OpenCL accelerate deep learning pipelines and why GPU parallelism is key for real-time inference.',
  },
  {
    title: 'Data-Driven Simulations: Future of Engineering',
    date: 'May 20, 2025',
    summary: 'Combining ML with simulation allows predictive modeling at scale. Discover tools and trends driving this evolution.',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 px-6 py-10">
      <h1 className="text-4xl font-bold text-neon mb-10 text-center">📝 Blog</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-neon transition-all">
            <h2 className="text-xl font-semibold text-neon">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-300">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
