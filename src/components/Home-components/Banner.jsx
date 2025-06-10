const Banner = () => {
  return (
    <div className="hero bg-gradient-to-b lg:bg-gradient-to-l from-cyan-100 min-h-screen">
      <div className="hero-content text-center">
        <div className="w-11/12 text-center">
          <div className="flex justify-center py-5">
            <img
              src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
              alt=""
              className="animate-bounce"
            />
          </div>
          <h1 className="text-4xl  font-bold">
            <span className="animate-pulse">🔍</span> GEN ART: AI-Powered Image
            Generator
          </h1>
          <p className="py-6">
            Lets convert your creativity in the next level with Pic-Seek-AI.🎯
            Find, Analyze & Explore Images Smarter with AI!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
