import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CookieBanner from '../components/CookieBanner';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const quantityOptions = ['1–10', '11–50', '51–200', '201–500', '500+'];
const decisionOptions = [
  'Price', 'Brand reputation', 'Product features', 'After-sales support',
  'Recommendation', 'Other',
];
const countryOptions = [
  'Cambodia', 'Thailand', 'Vietnam', 'Singapore', 'Malaysia', 'Indonesia',
  'Philippines', 'Myanmar', 'Laos', 'Other',
];
const businessTypeOptions = [
  'Retailer', 'Distributor', 'System Integrator', 'End User', 'Other',
];
const companySizeOptions = ['1–10', '11–50', '51–200', '201–500', '500+'];
const industryOptions = [
  'Retail', 'F&B / Restaurant', 'Logistics & Warehouse', 'Healthcare',
  'Hospitality', 'Finance / Payments', 'Education', 'Government', 'Other',
];

function SelectField({
  label, options, value, onChange, required,
}: {
  label: string; options: string[]; value: string;
  onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all pr-10"
      >
        <option value="">{label}{required ? '*' : ''}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

function InputField({
  label, type = 'text', value, onChange, required,
}: {
  label: string; type?: string; value: string;
  onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <input
      type={type}
      required={required}
      placeholder={`${label}${required ? '*' : ''}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all"
    />
  );
}

export default function PurchaseInquiry() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') ?? '';

  const [form, setForm] = useState({
    quantity: '',
    name: '',
    phone: '',
    email: '',
    decisionFactor: '',
    country: '',
    company: '',
    businessType: '',
    companySize: '',
    industry: '',
    talkedToRep: '' as '' | 'yes' | 'no',
    repName: '',
    notes: '',
    agreePrivacy: false,
    agreeMarketing: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form) => (val: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header forceLight />
        <div className="min-h-[calc(100vh-72px)] mt-[72px] flex flex-col items-center justify-center px-4 text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-white font-black text-3xl" style={{ fontFamily: "'Nunito', sans-serif" }}>P</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Thank you!</h2>
          <p className="text-gray-500 text-base max-w-sm">
            Your inquiry has been received. Our team will get back to you shortly.
          </p>
        </div>
        <Footer />
        <CookieBanner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header forceLight />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-[96px] pb-20">

        {/* Header */}
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate="visible"
          className="mb-10"
        >
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-orange-500 mb-3">Purchase Inquiry</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            {productParam ? `Inquire about ${productParam}` : 'Get in Touch'}
          </h1>
          <p className="mt-3 text-gray-500 text-base">
            Fill in the form below and our team will contact you shortly.
          </p>
          <div className="mt-4 w-12 h-1 bg-orange-500 rounded-full" />
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Quantity */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
            <SelectField
              label="Quantity Demanded" options={quantityOptions}
              value={form.quantity} onChange={set('quantity')} required
            />
          </motion.div>

          {/* Name + Phone */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-4">
            <InputField label="Name" value={form.name} onChange={set('name')} required />
            <InputField label="Phone" type="tel" value={form.phone} onChange={set('phone')} required />
          </motion.div>

          {/* Email + Decision factor */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-4">
            <InputField label="Email" type="email" value={form.email} onChange={set('email')} required />
            <SelectField
              label="When deciding which product to use, I"
              options={decisionOptions}
              value={form.decisionFactor} onChange={set('decisionFactor')} required
            />
          </motion.div>

          {/* Country */}
          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible">
            <SelectField
              label="Country" options={countryOptions}
              value={form.country} onChange={set('country')} required
            />
          </motion.div>

          {/* Company + Business type */}
          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-4">
            <InputField label="Company" value={form.company} onChange={set('company')} required />
            <SelectField
              label="Your business type" options={businessTypeOptions}
              value={form.businessType} onChange={set('businessType')} required
            />
          </motion.div>

          {/* Company Size + Industry */}
          <motion.div variants={fadeUp} custom={6} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-4">
            <SelectField
              label="Company Size" options={companySizeOptions}
              value={form.companySize} onChange={set('companySize')} required
            />
            <SelectField
              label="Industry" options={industryOptions}
              value={form.industry} onChange={set('industry')} required
            />
          </motion.div>

          {/* Sales rep radio */}
          <motion.div variants={fadeUp} custom={7} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-6 py-1">
            <p className="text-sm text-gray-700 font-medium">
              Have you communicated with our sales reps before?
            </p>
            <div className="flex gap-5">
              {(['yes', 'no'] as const).map((val) => (
                <label key={val} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="talkedToRep"
                    value={val}
                    checked={form.talkedToRep === val}
                    onChange={() => set('talkedToRep')(val)}
                    className="accent-orange-500 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700 capitalize">{val === 'yes' ? 'Yes' : 'No'}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Rep name — conditional */}
          {form.talkedToRep === 'yes' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <InputField
                label="Please tell us his/her name"
                value={form.repName} onChange={set('repName')}
              />
            </motion.div>
          )}

          {/* Notes */}
          <motion.div variants={fadeUp} custom={8} initial="hidden" animate="visible">
            <textarea
              placeholder="Notes"
              value={form.notes}
              onChange={(e) => set('notes')(e.target.value)}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all resize-y"
            />
          </motion.div>

          {/* Checkboxes */}
          <motion.div variants={fadeUp} custom={9} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.agreePrivacy}
                onChange={(e) => set('agreePrivacy')(e.target.checked)}
                className="accent-orange-500 mt-0.5 w-4 h-4 flex-shrink-0"
              />
              <span>
                I agree to{' '}
                <span className="text-orange-500 font-medium">Pixel Privacy Statement and Terms of Service.</span>
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agreeMarketing}
                onChange={(e) => set('agreeMarketing')(e.target.checked)}
                className="accent-orange-500 mt-0.5 w-4 h-4 flex-shrink-0"
              />
              <span>I'd like to receive more information from Pixel.</span>
            </label>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp} custom={10} initial="hidden" animate="visible"
            className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-3 rounded-lg transition-colors text-sm tracking-wide"
            >
              Submit
            </button>
          </motion.div>

        </form>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  );
}
