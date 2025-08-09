"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    materialDescription: "",
    budget: "",
    cif: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.materialDescription.length > 500) {
      alert("Material description must be 500 characters or less");
      setIsSubmitting(false);
      return;
    }

    try {
      const result1 = await emailjs.send(
        "service_k12bvbo", // your actual service ID
        "template_ud9b3sf", // replace with this admin Contact Us template ID
        {
          name: formData.name,
          email: formData.email,
          companyName: formData.companyName,
          mobile: formData.mobile,
          budget: formData.budget,
          cif: formData.cif,
          materialDescription: formData.materialDescription,
          title: "New Inquiry", // only if you're using {{title}} in subject
        },
        "6TFUzmXSK379xc12m" // your public key
      );

      const result = await emailjs.send(
        "service_k12bvbo", // ✅ Your actual EmailJS service ID
        "template_d7hwtx5", // ✅ Replace with your actual template ID
        {
          name: formData.name,
          email: formData.email,
          materialDescription: formData.materialDescription,
          // Add more fields only if they are used in the EmailJS template
        },
        "6TFUzmXSK379xc12m" // ✅ Replace with your EmailJS public key
      );

      if (result1.status === 200 && result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          companyName: "",
          email: "",
          mobile: "",
          materialDescription: "",
          budget: "",
          cif: "",
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error("Email sending failed", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Submit your material requirements and let us connect you with the
            right suppliers
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form with your material requirements and we'll
                  connect you with verified suppliers who can meet your
                  specifications and budget.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-phone-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div> */}

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-mail-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@matlink.com</p>
                    </div>
                  </div>

                  {/* <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Business District, Industrial Area, City
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-time-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Submit Your Requirements
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-green-600 text-2xl"></i>
                    </div>
                    <h4 className="text-xl font-semibold text-green-600 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      Your inquiry has been submitted successfully. We'll
                      contact you within 24 hours with supplier options.
                    </p>
                  </div>
                ) : (
                  <form
                    id="material-inquiry-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* 🔒 Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="_honey"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Material Description *
                      </label>
                      <textarea
                        name="materialDescription"
                        value={formData.materialDescription}
                        onChange={handleInputChange}
                        required
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="Please describe the materials you're looking for, including specifications, quantity, and any special requirements..."
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {formData.materialDescription.length}/500 characters
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range *
                      </label>
                      <input
                        type="text"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="e.g., $10,000 - $50,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CIF *
                      </label>
                      <div className="flex items-center gap-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="cif"
                            value="Yes"
                            checked={formData.cif === "Yes"}
                            onChange={handleInputChange}
                            required
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            Yes
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="cif"
                            value="No"
                            checked={formData.cif === "No"}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Requirements"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
