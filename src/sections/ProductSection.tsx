import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface ProductSectionProps {
  label?: string;
  title: string;
  subtitle: string;
  description?: string[];
  imageSrc: string;
  imageAlt: string;
  primaryCta?: string;
  secondaryCta?: string;
  reversed?: boolean;
  dark?: boolean;
  floatingImage?: boolean;
}

export default function ProductSection({
  label,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
  reversed = false,
  dark = false,
  floatingImage = false,
}: ProductSectionProps) {
  const bgClass = dark ? 'bg-gradient-dark' : 'bg-white';
  const textClass = dark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = dark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-20 lg:py-28 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image */}
          <ScrollReveal
            direction={reversed ? 'right' : 'left'}
            className={reversed ? 'lg:order-2' : ''}
          >
            <motion.div
              animate={floatingImage ? {
                y: [0, -10, 0],
              } : {}}
              transition={floatingImage ? {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              } : {}}
              className="relative"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal
            direction={reversed ? 'left' : 'right'}
            delay={0.2}
            className={reversed ? 'lg:order-1' : ''}
          >
            <div className="space-y-6">
              {label && (
                <p className={`text-sm font-medium uppercase tracking-wider ${mutedTextClass}`}>
                  {label}
                </p>
              )}
              <h2 className={`text-4xl lg:text-5xl font-bold ${textClass}`}>
                {title}
              </h2>
              <p className={`text-xl lg:text-2xl ${mutedTextClass}`}>
                {subtitle}
              </p>
              {description && (
                <ul className="space-y-2">
                  {description.map((item, index) => (
                    <li key={index} className={`flex items-center ${mutedTextClass}`}>
                      <span className="mr-2">・</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-4 pt-4">
                {primaryCta && (
                  <a
                    href="#"
                    className="group inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  >
                    {primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href="#"
                    className="inline-flex items-center h-11 px-6 border-2 border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                  >
                    {secondaryCta}
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
