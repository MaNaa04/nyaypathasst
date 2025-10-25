import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Shield, FileText } from "lucide-react";

export function TopicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const topics = [
    {
      icon: <BookOpen size={40} />,
      title: "Criminal Law",
      description: "Criminal justice system simplified.",
      details:
        "Navigate the complexities of criminal law with clear explanations of procedures, rights, and legal processes.",
    },
    {
      icon: <Shield size={40} />,
      title: "Protection Laws",
      description: "Women and child protection laws explained.",
      details:
        "Understand your rights and the legal frameworks designed to protect vulnerable groups in Indian society.",
    },
    {
      icon: <FileText size={40} />,
      title: "Case Studies",
      description: "Real legal scenarios explained clearly.",
      details:
        "Learn from practical examples that bring legal concepts to life with relatable, real-world situations.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="topics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Key legal topics for every citizen.
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {topics.map((topic, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200">
                  <CardHeader>
                    <div className="mb-4 text-gray-900">{topic.icon}</div>
                    <CardTitle className="text-2xl font-serif mb-2">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-700">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {topic.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
