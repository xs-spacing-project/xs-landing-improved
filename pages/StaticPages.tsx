
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const StaticPageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-brand-accent hover:text-brand-accent-hover font-semibold">
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">{title}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none text-brand-secondary prose-h2:font-bold prose-h2:tracking-tighter prose-h2:text-brand-dark dark:prose-h2:text-brand-light">
        {children}
      </div>
    </motion.div>
  );
};

export const PrivacyPolicyPage: React.FC = () => (
  <StaticPageLayout title="Privacy Policy">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <p>
      Xs Technologies Inc. ("us", "we", or "our") operates the Xs mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
    </p>
    <h2>Information Collection and Use</h2>
    <p>
      We collect several different types of information for various purposes to provide and improve our Service to you. This may include your name, email address, location data for finding parking, and payment information for bookings.
    </p>
    <h2>Location Data</h2>
    <p>
      We use your location data to show you nearby parking spots and to provide navigation. You can enable or disable location services when you use our Service at any time through your mobile device settings.
    </p>
    <h2>Security of Data</h2>
    <p>
      The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
    </p>
  </StaticPageLayout>
);

export const TermsOfServicePage: React.FC = () => (
  <StaticPageLayout title="Terms of Service">
    <p>Last updated: {new Date().toLocaleDateString()}</p>
    <p>
      Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Xs mobile application (the "Service") operated by Xs Technologies Inc. ("us", "we", or "our").
    </p>
    <h2>Bookings</h2>
    <p>
      By making a booking through our Service, you warrant that you are legally capable of entering into binding contracts. Bookings are subject to availability and the terms and conditions of the individual parking lot operators.
    </p>
    <h2>Cancellations and Refunds</h2>
    <p>
      Cancellation policies vary by parking location. The specific policy applicable to your booking will be made available to you at the time of booking. We are not responsible for refunds for services rendered by the parking operators.
    </p>
    <h2>Limitation of Liability</h2>
    <p>
      In no event shall Xs Technologies Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
    </p>
  </StaticPageLayout>
);

export const ContactPage: React.FC = () => (
  <StaticPageLayout title="Contact Us">
    <p>If you have any questions about our Service, or need help with a booking, please don't hesitate to reach out. We're here to help!</p>
    <div className="mt-8 space-y-4">
        <div>
            <h2 className="text-2xl">Email Support</h2>
            <a href="mailto:support@xs-parking.app" className="text-brand-accent hover:underline">support@xs-parking.app</a>
            <p>We aim to respond to all queries within 24 hours.</p>
        </div>
        <div>
            <h2 className="text-2xl">Press Inquiries</h2>
            <a href="mailto:press@xs-parking.app" className="text-brand-accent hover:underline">press@xs-parking.app</a>
        </div>
        <div>
            <h2 className="text-2xl">Corporate Office</h2>
            <p>123 Dharma Lane, Moksha City, Bharat 10001</p>
        </div>
    </div>
  </StaticPageLayout>
);
