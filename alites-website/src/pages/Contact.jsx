// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
// import SectionWrapper from '../components/SectionWrapper';

// const serviceOptions = [
//   'Penetration Testing',
//   'VAPT (Vulnerability Assessment & Penetration Testing)',
//   'SOC as a Service',
//   'Cloud Security',
//   'Incident Response',
//   'Compliance Advisory',
//   'Other / General Inquiry',
// ];

// const contactDetails = [
//   {
//     icon: MapPin,
//     label: 'Office Address',
//     value: 'No. 12, Tech Park, Coimbatore – 641014, Tamil Nadu, India',
//     link: null,
//   },
//   {
//     icon: Phone,
//     label: 'Phone',
//     value: '+91 98765 43210',
//     link: 'tel:+919876543210',
//   },
//   {
//     icon: Mail,
//     label: 'Email',
//     value: 'contact@alites.in',
//     link: 'mailto:contact@alites.in',
//   },
// ];

// const initialForm = {
//   name: '',
//   email: '',
//   company: '',
//   service: '',
//   message: '',
// };

// export default function Contact() {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = 'Name is required';
//     if (!form.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
//     if (!form.company.trim()) newErrors.company = 'Company name is required';
//     if (!form.service) newErrors.service = 'Please select a service';
//     if (!form.message.trim()) newErrors.message = 'Message is required';
//     else if (form.message.trim().length < 20)
//       newErrors.message = 'Please provide more detail (min. 20 characters)';
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     setLoading(true);
//     // Simulate async submit
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   const inputClass = (field) =>
//     `w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 input-focus-glow ${
//       errors[field]
//         ? 'border-red-500/60 focus:border-red-400'
//         : 'border-white/10 focus:border-accent/60 focus:bg-white/[0.06]'
//     }`;

//   return (
//     <div className="pt-16 overflow-x-hidden">
//       {/* Page Hero */}
//       <section className="relative py-20 sm:py-28 overflow-hidden">
//         <div className="absolute inset-0 grid-bg opacity-40" />
//         <div
//           className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
//           style={{
//             background:
//               'radial-gradient(ellipse at top, rgba(0,229,255,0.1) 0%, transparent 70%)',
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
//           >
//             <MessageSquare className="w-3.5 h-3.5" />
//             We Respond Within 24 Hours
//           </motion.div>
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
//           >
//             Get in <span className="text-gradient">Touch</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
//           >
//             Ready to strengthen your security? Fill out the form and one of our security consultants will reach out within one business day.
//           </motion.p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <SectionWrapper className="pb-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left Column: Contact Info + Map */}
//             <div className="space-y-8">
//               <div>
//                 <h2 className="font-syne font-bold text-2xl text-white mb-6">
//                   Contact Information
//                 </h2>
//                 <div className="space-y-5">
//                   {contactDetails.map(({ icon: Icon, label, value, link }) => (
//                     <div
//                       key={label}
//                       className="flex gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5"
//                     >
//                       <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
//                         <Icon className="w-5 h-5 text-accent" />
//                       </div>
//                       <div>
//                         <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">
//                           {label}
//                         </div>
//                         {link ? (
//                           <a
//                             href={link}
//                             className="text-slate-300 text-sm hover:text-accent transition-colors"
//                           >
//                             {value}
//                           </a>
//                         ) : (
//                           <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Map Placeholder */}
//               <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
//                 <div className="h-64 flex flex-col items-center justify-center gap-4 relative">
//                   {/* Grid overlay */}
//                   <div className="absolute inset-0 grid-bg opacity-30" />
//                   <div className="relative z-10 flex flex-col items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
//                       <MapPin className="w-6 h-6 text-accent" />
//                     </div>
//                     <div className="text-center">
//                       <p className="text-slate-300 font-syne font-semibold text-sm">
//                         Alites Cybersecurity Solutions
//                       </p>
//                       <p className="text-slate-500 text-xs mt-1">
//                         No. 12, Tech Park, Coimbatore – 641014
//                       </p>
//                     </div>
//                     <div
//                       className="px-4 py-2 rounded-lg text-xs text-accent border border-accent/30 bg-accent/5 cursor-pointer hover:bg-accent/10 transition-colors"
//                     >
//                       View on Google Maps
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Office Hours */}
//               <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
//                 <h3 className="font-syne font-semibold text-white text-sm mb-4">Office Hours</h3>
//                 <div className="space-y-2">
//                   {[
//                     { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM IST' },
//                     { day: 'Saturday', hours: '10:00 AM – 2:00 PM IST' },
//                     { day: 'SOC / Emergency Line', hours: '24 × 7 × 365' },
//                   ].map(({ day, hours }) => (
//                     <div
//                       key={day}
//                       className="flex justify-between items-center text-sm"
//                     >
//                       <span className="text-slate-400">{day}</span>
//                       <span className="text-slate-300 font-medium">{hours}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: Form */}
//             <div>
//               <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
//                 {submitted ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.4 }}
//                     className="flex flex-col items-center text-center py-10 gap-5"
//                   >
//                     <motion.div
//                       initial={{ scale: 0, rotate: -90 }}
//                       animate={{ scale: 1, rotate: 0 }}
//                       transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
//                       className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
//                     >
//                       <CheckCircle2 className="w-8 h-8 text-green-400" />
//                     </motion.div>
//                     <div>
//                       <h3 className="font-syne font-bold text-white text-2xl mb-2">
//                         Thank You, {form.name.split(' ')[0]}!
//                       </h3>
//                       <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
//                         Your message has been received. One of our security consultants will reach out to you at{' '}
//                         <span className="text-accent">{form.email}</span> within one business day.
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => {
//                         setSubmitted(false);
//                         setForm(initialForm);
//                       }}
//                       className="mt-4 text-accent text-sm font-medium hover:underline"
//                     >
//                       Send another message
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <>
//                     <h2 className="font-syne font-bold text-xl text-white mb-6">
//                       Send Us a Message
//                     </h2>
//                     <form onSubmit={handleSubmit} noValidate className="space-y-5">
//                       {/* Name */}
//                       <div>
//                         <label htmlFor="name" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
//                           Full Name <span className="text-accent">*</span>
//                         </label>
//                         <input
//                           id="name"
//                           name="name"
//                           type="text"
//                           value={form.name}
//                           onChange={handleChange}
//                           placeholder="Rajesh Kumar"
//                           className={inputClass('name')}
//                           autoComplete="name"
//                         />
//                         {errors.name && (
//                           <p className="text-red-400 text-xs mt-1">{errors.name}</p>
//                         )}
//                       </div>

//                       {/* Email */}
//                       <div>
//                         <label htmlFor="email" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
//                           Work Email <span className="text-accent">*</span>
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={form.email}
//                           onChange={handleChange}
//                           placeholder="rajesh@company.com"
//                           className={inputClass('email')}
//                           autoComplete="email"
//                         />
//                         {errors.email && (
//                           <p className="text-red-400 text-xs mt-1">{errors.email}</p>
//                         )}
//                       </div>

//                       {/* Company */}
//                       <div>
//                         <label htmlFor="company" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
//                           Company Name <span className="text-accent">*</span>
//                         </label>
//                         <input
//                           id="company"
//                           name="company"
//                           type="text"
//                           value={form.company}
//                           onChange={handleChange}
//                           placeholder="Acme Technologies Pvt. Ltd."
//                           className={inputClass('company')}
//                           autoComplete="organization"
//                         />
//                         {errors.company && (
//                           <p className="text-red-400 text-xs mt-1">{errors.company}</p>
//                         )}
//                       </div>

//                       {/* Service */}
//                       <div>
//                         <label htmlFor="service" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
//                           Service of Interest <span className="text-accent">*</span>
//                         </label>
//                         <select
//                           id="service"
//                           name="service"
//                           value={form.service}
//                           onChange={handleChange}
//                           className={`${inputClass('service')} cursor-pointer`}
//                         >
//                           <option value="" disabled>
//                             Select a service...
//                           </option>
//                           {serviceOptions.map((opt) => (
//                             <option key={opt} value={opt} className="bg-[#050D1A]">
//                               {opt}
//                             </option>
//                           ))}
//                         </select>
//                         {errors.service && (
//                           <p className="text-red-400 text-xs mt-1">{errors.service}</p>
//                         )}
//                       </div>

//                       {/* Message */}
//                       <div>
//                         <label htmlFor="message" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
//                           Message <span className="text-accent">*</span>
//                         </label>
//                         <textarea
//                           id="message"
//                           name="message"
//                           rows={5}
//                           value={form.message}
//                           onChange={handleChange}
//                           placeholder="Tell us about your security needs, current challenges, or any specific requirements..."
//                           className={`${inputClass('message')} resize-none`}
//                         />
//                         {errors.message && (
//                           <p className="text-red-400 text-xs mt-1">{errors.message}</p>
//                         )}
//                       </div>

//                       {/* Submit */}
//                       <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-syne font-bold py-3.5 px-6 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
//                       >
//                         {loading ? (
//                           <>
//                             <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             <Send className="w-4 h-4" />
//                             Send Message
//                           </>
//                         )}
//                       </button>

//                       <p className="text-slate-600 text-xs text-center">
//                         By submitting this form, you agree to our Privacy Policy. We never share your data with third parties.
//                       </p>
//                     </form>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </SectionWrapper>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock, Shield } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const serviceOptions = [
  'Penetration Testing',
  'VAPT (Vulnerability Assessment & Penetration Testing)',
  'SOC as a Service',
  'Cloud Security',
  'Incident Response',
  'Compliance Advisory (ISO 27001 / PCI DSS / SOC 2)',
  'Other / General Inquiry',
];

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office',
    value: 'No. 12, Tech Park, Coimbatore – 641014, Tamil Nadu, India',
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@alites.in',
    link: 'mailto:contact@alites.in',
  },
];

const trustSignals = [
  {
    icon: Clock,
    label: 'We respond within 24 hours',
    sub: 'Usually much faster during business hours.',
  },
  {
    icon: Shield,
    label: '100% confidential',
    sub: 'Everything you share is protected under strict NDA.',
  },
  {
    icon: CheckCircle2,
    label: 'No sales pressure',
    sub: 'Our first call is always about your needs, not our quota.',
  },
];

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 20)
      newErrors.message = 'Please provide more detail (min. 20 characters)';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-white/[0.04] border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 outline-none transition-all duration-200 input-focus-glow ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-white/10 focus:border-accent/60 focus:bg-white/[0.06]'
    }`;

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(0,229,255,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 rounded-full px-4 py-1.5 text-accent text-xs font-medium mb-6"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            No Obligation. No Sales Pressure. Just Expertise.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            Let's Talk About <span className="text-gradient">Your Security</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you have a specific engagement in mind or just want to understand where your biggest risks are, our security consultants will give you an honest, expert perspective — free of charge.
          </motion.p>
        </div>
      </section>

      {/* Trust signals */}
      <SectionWrapper className="pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-0">
            {trustSignals.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-white text-sm font-syne font-semibold">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Main Content */}
      <SectionWrapper className="pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="font-syne font-bold text-2xl text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, link }) => (
                    <div key={label} className="flex gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{label}</div>
                        {link ? (
                          <a href={link} className="text-slate-300 text-sm hover:text-accent transition-colors">{value}</a>
                        ) : (
                          <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="h-64 flex flex-col items-center justify-center gap-4 relative">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-center">
                      <p className="text-slate-300 font-syne font-semibold text-sm">Alites Cybersecurity Solutions</p>
                      <p className="text-slate-500 text-xs mt-1">No. 12, Tech Park, Coimbatore – 641014</p>
                    </div>
                    <div className="px-4 py-2 rounded-lg text-xs text-accent border border-accent/30 bg-accent/5 cursor-pointer hover:bg-accent/10 transition-colors">
                      View on Google Maps
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
                <h3 className="font-syne font-semibold text-white text-sm mb-4">Availability</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM IST' },
                    { day: 'Saturday', hours: '10:00 AM – 2:00 PM IST' },
                    { day: 'SOC / Incident Response', hours: '24 × 7 × 365' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">{day}</span>
                      <span className="text-slate-300 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-slate-500 text-xs">
                    Experiencing an active incident? Call our emergency line directly — we deploy within hours, not days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center py-10 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-syne font-bold text-white text-2xl mb-2">
                        Message Received, {form.name.split(' ')[0]}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        One of our security consultants will contact you at{' '}
                        <span className="text-accent">{form.email}</span> within one business day — typically much sooner.
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); setForm(initialForm); }}
                      className="mt-4 text-accent text-sm font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-syne font-bold text-xl text-white mb-2">
                      Tell Us About Your Security Needs
                    </h2>
                    <p className="text-slate-500 text-sm mb-6">
                      The more detail you share, the more useful our first conversation will be.
                    </p>
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Rajesh Kumar" className={inputClass('name')} autoComplete="name" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
                          Work Email <span className="text-accent">*</span>
                        </label>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="rajesh@company.com" className={inputClass('email')} autoComplete="email" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
                          Organisation <span className="text-accent">*</span>
                        </label>
                        <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Technologies Pvt. Ltd." className={inputClass('company')} autoComplete="organization" />
                        {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
                          Service of Interest <span className="text-accent">*</span>
                        </label>
                        <select id="service" name="service" value={form.service} onChange={handleChange} className={`${inputClass('service')} cursor-pointer`}>
                          <option value="" disabled>Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#050D1A]">{opt}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-slate-400 text-xs font-medium uppercase tracking-wide mb-1.5">
                          Tell Us More <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                          placeholder="Describe your security challenges, environment size, compliance obligations, or anything that will help us prepare for our conversation..."
                          className={`${inputClass('message')} resize-none`}
                        />
                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-accent text-primary font-syne font-bold py-3.5 px-6 rounded-lg hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-slate-600 text-xs text-center">
                        Your information is protected under strict NDA and our Privacy Policy. We never share client data with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}