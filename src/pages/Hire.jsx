import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ErrorMessage from '../components/Shared/error';
import SuccessMessage from '../components/Shared/Success';
import { isOpen } from '../data/booleans';
import sendMail from '../components/Shared/sendmail';


const contactUsEmails = ['yadavamritk004@gmail.com', 'b24cm1008@iitj.ac.in'];
const contactUsNumbers = ['+91 8340376572'];

const Hire = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    jobType: '',
    email: '',
    contactNumber: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError({ title: 'Error', message: 'Fill required fields!' });
      return;
    } else if (formData.contactNumber.length != 0 && (formData.contactNumber.length <= 5 || formData.contactNumber.length > 11)) return setError({ title: 'Error', message: 'Please enter a valid mobile number.' })


    // Handle form submission
    const now = new Date();

    sendMail(e,{website:"AMRIT PORTFOLIO",page:"HIREME",name:formData.name,email:formData.email,
      content:
      `
      JobType: ${formData.jobType}
      Contact number: ${formData.contactNumber}
      Message: ${formData.message}
      Time: ${now.toLocaleTimeString()}
      `})

      setSuccess({
        title: "Success",
        message: "Messgae sent"
      })
      setFormData({ name: '', email: '', contactNumber: '', message: '' });
  };


  const handleContactNumberChange = (e) => {
    // Only allow numbers and prevent non-numeric input
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setFormData({ ...formData, contactNumber: value });
    }
  };
  return (
    <div className="shadow-md shadow-black/75 dark:border-white border-lg w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.div
        className="w-full max-w-5xl mx-auto text-center py-8 mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Let's <span className="text-blue-600 dark:text-blue-400">Work Together</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I’m committed to delivering quality work with clear communication and full dedication. Let’s build something great.
        </p>

      </motion.div>



      {/* Contact Info Section (Emails and Numbers stacked vertically) */}
      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Contact Information (Email & Phone) */}
        <div className="w-full flex flex-col justify-start items-start gap-8">

          {/* Avaibility */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-[400px] p-6 shadow-black/25 dark:shadow-white/20 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Avaibility</h2>
              <motion.div
                className="block text-lg text-black dark:text-white mb-2"
              >
                {(isOpen) ?

                  <div className='bg-green-400 px-4 py-2 rounded text-center w-full'>
                    Open to work
                  </div>

                  :
                  <div className='bg-red-400 px-4 py-2 w-full text-center'>
                    Currently occupied <a href='/contact' className='text-blue-600 hover:underline' >contact me</a>
                  </div>
                }
              </motion.div>
            </div>
          </motion.div>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-[400px] p-6 shadow-black/25 dark:shadow-white/20 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Email</h2>
              {contactUsEmails.map((email, index) => (
                <motion.a
                  key={index}
                  href={`mailto:${email}`}
                  className="block text-lg text-blue-600 dark:text-blue-400 hover:underline mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {email}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="w-[400px] p-6 bg-white shadow-black/25 dark:shadow-white/20 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Call</h2>
              {contactUsNumbers.map((number, index) => (
                <motion.span
                  key={index}
                  onClick={() => navigator.clipboard.writeText(number)}
                  className="block text-lg text-gray-800 dark:text-gray-300 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {number}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Form Section (On the right of the contact info) */}
        <motion.div
          className="w-full max-w-lg shadow-black/25 bg-white dark:shadow-white/20 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">Company Name*</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
                Job Type*
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                value={formData.jobType}
                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                required
              >
                <option value="Intern">Intern</option>
                <option value="Intern">Freelance Project</option>
                <option value="Online Part time">Online Part time</option>
                <option value="Online Full time">Online Full time</option>
                <option value="Onsite Part time">Onsite Part time</option>
                <option value="Onsite Full time">Onsite Full time</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">Email*</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">Telephone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                value={formData.contactNumber}
                onChange={handleContactNumberChange}
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">Message*</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
          {error && (
            <ErrorMessage title={error.title} message={error.message} state={true} />
          )}
          {success &&
            <SuccessMessage title={success.title} message={success.message} state={true} />
          }
        </motion.div>
      </motion.div >
    </div >
  )
}

export default Hire