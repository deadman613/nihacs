import React, { useState } from 'react'

const About = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-xl p-8 border border-neutral-800">

        <h2 className="text-red-600 text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-neutral-400 text-sm mb-8">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-2">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handle}
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-2">Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handle}
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-2">Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={handle}
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-neutral-300 text-sm font-medium mb-2">Course Interest</label>
            <select
              name="course"
              value={form.course}
              onChange={handle}
              className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600"
            >
              <option value="">Select a course</option>
              <option>Web Penetration Testing & Bug Bounty</option>
              <option>Basic Ethical Hacking</option>
              <option>Bachelor in Cybersecurity</option>
              <option>Master in Cybersecurity</option>
              <option>Diploma in Cybersecurity</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-neutral-300 text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your goals..."
            value={form.message}
            onChange={handle}
            className="w-full bg-black border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-red-600 resize-y"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors duration-200"
        >
          Submit
        </button>

      </div>
    </div>
  )
}

export default About