import { Card } from "flowbite-react";

export function About() {
  return (
    <Card className="max-w-sm ml-[32%]" imgSrc="C:\Users\sahan\OneDrive\Documents\Projects\React\isaca-official-web\public\img\about.webp" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Vision
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      To be the leading force in fostering a culture of innovation, ethical conduct, and excellence in cybersecurity within our university community.
      </p>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Mission
      </h5>
      <ul className="list-disc font-normal text-gray-700 dark:text-gray-400">
      <li><b>Educational:</b> To provide a platform for students to acquire in-depth knowledge and practical skills in cybersecurity, governance, and risk management.</li>
      <li><b>Collaborative:</b> To foster a collaborative environment where students can network, share ideas, and learn from each other.</li>
      <li><b>Ethical:</b> To promote ethical practices and responsible use of technology within the cybersecurity field.</li>
      <li><b>Community</b>-Oriented: To contribute to the well-being of our university and broader community by addressing cybersecurity challenges and promoting digital safety.</li>
      </ul>

    </Card>
  );
}