export default function OurStory() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-12 text-center">
            Our story
          </h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We build it because we need it.
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Methylation Coach wasn't born in a boardroom. It was born out of frustration.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Our creator, <strong>Rafael Jegundo (CEO of Whitesmith)</strong>, was already tracking his health data manually. He was managing his own methylation issues using a chaotic mix of spreadsheets, nutrition logs, and late-night research.
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
              <p className="text-lg italic text-gray-700">
                "I was sitting in dark restaurants, squinting at menus, trying to calculate if a meal would throw my biochemistry off balance. I realized I was doing math that an AI could do instantly."
              </p>
              <cite className="text-gray-600 not-italic">— Rafael Jegundo</cite>
            </blockquote>

            <p className="text-lg text-gray-600 mb-6">
              Rafael realized that while general "wellness" apps are great for the masses, they fail people with specific, complex biological needs. He needed a tool that understood <em>his</em> genetics and <em>his</em> current symptoms—not just generic advice.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Leveraging Whitesmith's expertise in AI and product engineering, the team built the prototype in just <strong>4 days</strong>.
            </p>

            <p className="text-lg text-gray-600 mb-12">
              We believe the future of health isn't "one size fits all." It's <strong>Micro-Health</strong>. We are proving that technology is now affordable enough to build highly specialized, private, and secure tools for niche communities. Methylation Coach is just the beginning.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Built by Whitesmith
              </h3>

              <div className="mb-6">
                <img
                  src="/whitesmith.png"
                  alt="Whitesmith"
                  className="h-12 w-auto"
                />
              </div>

              <p className="text-lg text-gray-600 mb-4">
                We are a London and Coimbra-based innovation studio. We help organizations turn emerging technology into practical, human-centred products.
              </p>

              <a
                href="https://whitesmith.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
              >
                Visit Whitesmith.co →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
