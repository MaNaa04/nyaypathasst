import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                alt="People discussing legal matters"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Democratizing legal knowledge for all Indians.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We believe every citizen deserves to understand their legal
              rights. Our platform bridges the gap between complex legal systems
              and everyday people.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through clear explanations, practical examples, and accessible
              language, we empower you to navigate India's legal landscape with
              confidence. Whether you're dealing with property matters, seeking
              bail information, or understanding your fundamental rights,
              NyayPathAsst is your trusted companion.
            </p>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-gray-900">
              <p className="text-sm text-gray-500 italic">
                <strong>Disclaimer:</strong> This platform is for educational
                purposes only and does not constitute legal advice. Please
                consult with a qualified legal professional for specific legal
                matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
