export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Stop guessing, start balancing!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The first AI health companion that connects your <strong>Genetics</strong>, <strong>Nutrition</strong>, and <strong>Symptoms</strong> to optimize your body's methylation cycle in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://apps.apple.com/pt/app/methylation-coach-ai/id6753342031?l=en-GB" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <img
                  src="/appstore.png"
                  alt="Download on the App Store"
                  className="h-16 w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=co.whitesmith.daily_methylation_insight" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <img
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  className="h-16 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
            The missing link in your health data
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Most health apps only look at one piece of the puzzle. Methylation Coach uses AI to connect the dots between your DNA and your daily diet.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your genetics</h3>
              <p className="text-gray-600">
                We analyze your raw DNA data (specifically the MTHFR gene and 5-7 key SNPs) to understand your body's unique operating manual.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your nutrition</h3>
              <p className="text-gray-600">
                Seamless integration with Cronometer tracks your intake of B12, Folate, and other methylation-critical nutrients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your symptoms</h3>
              <p className="text-gray-600">
                Feeling low energy? Brain fog? Tell the app how you feel, and our AI cross-references it with your data to suggest the immediate next step.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/analysemyday.webp"
                alt="Analyze My Day feature"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/findings.webp"
                alt="Daily findings and recommendations"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/history.webp"
                alt="History tracking"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/symptomtracking.webp"
                alt="Symptom tracking"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Master your biochemistry
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Methylation is the engine that powers your energy, detox pathways, and focus. When it's out of balance—running too fast or too slow—you feel it.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Optimize dopamine and focus</h3>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support natural detox</h3>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Balance energy levels</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
