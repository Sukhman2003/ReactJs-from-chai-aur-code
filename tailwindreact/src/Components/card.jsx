import React from 'react';

function Card({username}) {
  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div className="group relative">
        <img
          src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg"
          alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
          className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 aspect-[2/1] lg:aspect-square"
        />
        <div className="mt-6">
          <h3 className="text-sm text-gray-500">
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-0"></span>
              {username}
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
