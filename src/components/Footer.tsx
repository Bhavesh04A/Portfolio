export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center ">
      <p className="text-gray-400 text-sm">
       © {new Date().getFullYear()} | All rights reserved. Made with <span className="text-red-500">❤️</span> by <span className="font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Bhavesh Alawane
        </span>.
      </p>
    </footer>
  );
}
