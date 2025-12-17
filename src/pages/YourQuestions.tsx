export default function YourQuestions() {
  const faqs = [
    {
      question: "Do I need a genetic test to use this?",
      answer: "Yes. The app works best when it knows your \"hardware.\" You will need raw genetic data (often available for ~EUR200 from major testing providers) to import into the app."
    },
    {
      question: "Do I need a paid Cronometer account?",
      answer: "No. Methylation Coach works perfectly with the free version of Cronometer. We use it to pull your nutritional history (like B12 and Folate intake) over the last 7 days."
    },
    {
      question: "Is my health data private?",
      answer: "Absolutely. We built this with a \"privacy-first\" architecture. We do not store your data on public servers unnecessarily. The app only accesses the specific data points needed (like your 5-7 key SNPs and recent meals) to generate your recommendations. We don't sell your data—we just help you understand it."
    },
    {
      question: "Is this medical advice?",
      answer: "No. Methylation Coach is an informational tool and a \"sparring partner\" for your wellness decisions. It helps you sanity-check your choices against your own data, but it does not replace a doctor or clinical diagnosis."
    },
    {
      question: "What exactly is \"Methylation\"?",
      answer: "Think of methylation as your body's \"operating system\" for chemical reactions. It controls how you repair DNA, produce energy, and clear out toxins. When this cycle is too slow (under-methylation) or too fast (over-methylation), you might feel tired, anxious, or foggy. This app helps you keep that cycle in the \"Goldilocks\" zone."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-12 text-center">
            Your Questions
          </h1>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
