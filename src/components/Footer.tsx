
const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Ijeoma Ifeyinwa Enem</h3>
          <p className="text-gray-300 mb-4">
            Engineering Scalable Solutions with Purpose & Precision
          </p>
          <div className="border-t border-navy-light pt-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ijeoma Ifeyinwa Enem. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
