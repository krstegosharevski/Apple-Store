import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
  },
  {
    title: "Services",
    links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud", "Apple One", "Apple Card", "Apple Books", "Apple Podcasts"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "For Education",
    links: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    title: "For Healthcare",
    links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"],
  },
  {
    title: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"],
  },
  {
    title: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs pt-8 pb-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-300 pb-4 mb-4">
          <p className="text-[#86868b] leading-relaxed">
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple's trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <h3 className="font-semibold text-[#1d1d1f] mb-1">{column.title}</h3>
              {column.links.map((link) => (
                <Link key={link} to="#" className="text-[#424245] hover:text-[#1d1d1f] hover:underline">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-300 text-[#86868b]">
          <p>Copyright Â© 2026 Apple Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline border-r border-gray-400 pr-4">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline border-r border-gray-400 pr-4">Terms of Use</Link>
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline border-r border-gray-400 pr-4">Sales and Refunds</Link>
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline border-r border-gray-400 pr-4">Legal</Link>
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline">Site Map</Link>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="#" className="hover:text-[#1d1d1f] hover:underline">United States</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
