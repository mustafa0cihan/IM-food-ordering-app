import React from "react";
export const Footer = () => {
  return (
    <footer class="bg-red-800">
      <div>
        <div class="grid grid-cols-2 gap-8 py-4 px-6 mt-8 md:grid-cols-4 text-white">
          <a href="https://powercoders.org/" className="hover:underline">
            Company
          </a>
          <a href="about" className=" hover:underline">
            About
          </a>
          <a href="menu" className="hover:underline">
            Menu
          </a>
          <a
            href="https://www.linkedin.com/school/powercoders/"
            className="hover:underline"
          >
            Social Media
          </a>
        </div>
      </div>
    </footer>
  );
};
