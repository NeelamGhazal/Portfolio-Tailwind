export default function Contact() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
        Let's Connect
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-3 py-2 bg-gray-800 border border-purple-500 text-white rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 bg-gray-800 border border-purple-500 text-white rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-purple-500 text-white rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-2 rounded transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

