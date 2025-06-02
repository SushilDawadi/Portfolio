export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
            &copy; {new Date().getFullYear()} Sushil Dawadi. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 font-mono mt-2 md:mt-0">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
