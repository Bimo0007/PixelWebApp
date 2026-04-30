import { useState, forwardRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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

/* ─── Zod Validation Schema ─── */
const inquirySchema = z.object({
  quantity: z.string().min(1, 'Please select a quantity'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  decisionFactor: z.string().min(1, 'Please select a decision factor'),
  country: z.string().min(1, 'Please select a country'),
  company: z.string().min(1, 'Company name is required'),
  businessType: z.string().min(1, 'Please select a business type'),
  companySize: z.string().min(1, 'Please select a company size'),
  industry: z.string().min(1, 'Please select an industry'),
  talkedToRep: z.enum(['yes', 'no'] as const, { required_error: 'Please select an option' }),
  repName: z.string().optional(),
  notes: z.string().optional(),
  agreePrivacy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy statement',
  }),
  agreeMarketing: z.boolean().optional(),
}).superRefine((data, ctx) => {
  // Conditionally validate repName if talkedToRep is "yes"
  if (data.talkedToRep === 'yes' && (!data.repName || data.repName.trim() === '')) {
    ctx.addIssue({
      path: ['repName'],
      code: z.ZodIssueCode.custom,
      message: 'Representative name is required',
    });
  }
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

/* ─── Custom Form Fields with ForwardRef ─── */
interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
}
const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, options, error, required, ...props }, ref) => (
    <div className="w-full relative">
      <div className="relative">
        <select
          ref={ref}
          {...props}
          className={`w-full appearance-none border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-orange-400 focus:ring-orange-400/20'} rounded-lg px-4 py-3 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 transition-all pr-10`}
        >
          <option value="">{label}{required ? '*' : ''}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {error && <p className="absolute -bottom-5 left-1 text-red-500 text-[11px]">{error}</p>}
    </div>
  )
);

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, required, ...props }, ref) => (
    <div className="w-full relative">
      <input
        ref={ref}
        placeholder={`${label}${required ? '*' : ''}`}
        {...props}
        className={`w-full border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-orange-400 focus:ring-orange-400/20'} rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 transition-all`}
      />
      {error && <p className="absolute -bottom-5 left-1 text-red-500 text-[11px]">{error}</p>}
    </div>
  )
);

export default function PurchaseInquiry() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') ?? '';

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      talkedToRep: 'no',
      agreePrivacy: false,
      agreeMarketing: false,
    },
  });

  const talkedToRepValue = useWatch({ control, name: 'talkedToRep' });

  const onSubmit = (data: InquiryFormValues) => {
    console.log('Form data submitted:', data);
    // Perform API call here
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">

          {/* Quantity */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
            <SelectField
              label="Quantity Demanded" options={quantityOptions}
              {...register('quantity')} required error={errors.quantity?.message}
            />
          </motion.div>

          {/* Name + Phone */}
          <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-7 sm:gap-4">
            <InputField label="Name" {...register('name')} required error={errors.name?.message} />
            <InputField label="Phone" type="tel" {...register('phone')} required error={errors.phone?.message} />
          </motion.div>

          {/* Email + Decision factor */}
          <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-7 sm:gap-4">
            <InputField label="Email" type="email" {...register('email')} required error={errors.email?.message} />
            <SelectField
              label="When deciding which product to use, I"
              options={decisionOptions}
              {...register('decisionFactor')} required error={errors.decisionFactor?.message}
            />
          </motion.div>

          {/* Country */}
          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible">
            <SelectField
              label="Country" options={countryOptions}
              {...register('country')} required error={errors.country?.message}
            />
          </motion.div>

          {/* Company + Business type */}
          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-7 sm:gap-4">
            <InputField label="Company" {...register('company')} required error={errors.company?.message} />
            <SelectField
              label="Your business type" options={businessTypeOptions}
              {...register('businessType')} required error={errors.businessType?.message}
            />
          </motion.div>

          {/* Company Size + Industry */}
          <motion.div variants={fadeUp} custom={6} initial="hidden" animate="visible"
            className="grid sm:grid-cols-2 gap-7 sm:gap-4">
            <SelectField
              label="Company Size" options={companySizeOptions}
              {...register('companySize')} required error={errors.companySize?.message}
            />
            <SelectField
              label="Industry" options={industryOptions}
              {...register('industry')} required error={errors.industry?.message}
            />
          </motion.div>

          {/* Sales rep radio */}
          <motion.div variants={fadeUp} custom={7} initial="hidden" animate="visible"
            className="py-1">
            <div className="flex flex-wrap items-center gap-6">
              <p className="text-sm text-gray-700 font-medium">
                Have you communicated with our sales reps before?
              </p>
              <div className="flex gap-5">
                {(['yes', 'no'] as const).map((val) => (
                  <label key={val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={val}
                      {...register('talkedToRep')}
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span className="text-sm text-gray-700 capitalize">{val === 'yes' ? 'Yes' : 'No'}</span>
                  </label>
                ))}
              </div>
            </div>
            {errors.talkedToRep && <p className="text-red-500 text-[11px] mt-1">{errors.talkedToRep.message}</p>}
          </motion.div>

          {/* Rep name — conditional */}
          {talkedToRepValue === 'yes' && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <InputField
                label="Please tell us his/her name"
                {...register('repName')}
                error={errors.repName?.message}
              />
            </motion.div>
          )}

          {/* Notes */}
          <motion.div variants={fadeUp} custom={8} initial="hidden" animate="visible">
            <textarea
              placeholder="Notes"
              {...register('notes')}
              rows={4}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all resize-y"
            />
          </motion.div>

          {/* Checkboxes */}
          <motion.div variants={fadeUp} custom={9} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <div className="flex flex-col">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('agreePrivacy')}
                  className="accent-orange-500 mt-0.5 w-4 h-4 flex-shrink-0"
                />
                <span>
                  I agree to{' '}
                  <span className="text-orange-500 font-medium">Pixel Privacy Statement and Terms of Service.</span>
                </span>
              </label>
              {errors.agreePrivacy && <p className="text-red-500 text-[11px] mt-1">{errors.agreePrivacy.message}</p>}
            </div>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register('agreeMarketing')}
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
              className="h-11 px-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 text-sm tracking-wide"
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