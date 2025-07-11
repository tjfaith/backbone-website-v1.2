import React from "react";

const ComingSoon = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Message */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Details Will Be
          <br />
          Available Soon
        </h1>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          We&apos;re working hard to bring you something amazing. Stay tuned for
          updates and be the first to know when we launch.
        </p>
      </div>
    </main>
  );
};

export default ComingSoon;
