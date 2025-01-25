import React from 'react'

function Card() {
  return (
    <>
     <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div class="group relative">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
          <h3 class="mt-6 text-sm text-gray-500">
            <a href="#">
              <span class="absolute inset-0"></span>
              Desk and Office
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
        </div>
        </div>
    </>
  )
}

export default Card