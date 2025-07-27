import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-500">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our Online Judge platform — a space designed for developers, students, and coding enthusiasts to sharpen their problem-solving skills. Whether you're just starting out or preparing for competitive programming contests and technical interviews, this platform provides the tools and challenges to help you grow.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Users can choose from a wide range of algorithmic and data structure problems. After submitting a solution, the system automatically compiles and executes the code against a set of predefined test cases, instantly providing a verdict — whether it is <span className="text-green-400 font-semibold">Accepted</span>, <span className="text-red-400 font-semibold">Wrong Answer</span>, or <span className="text-pink-400 font-semibold"> Error</span>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our goal is to help you improve your coding accuracy, efficiency, and speed by giving you real-time feedback and a structured environment to practice. Every submission helps you track your progress, learn from mistakes, and push your coding abilities to the next level.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you're practicing for campus placements, hackathons, or just love solving problems — we’re here to support your journey. Dive in and start coding!
        </p>
      </div>
    </div>
  );
}

export default About;
