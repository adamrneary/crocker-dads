import React from 'react';

import Image from 'next/image';

export default function Clubhouse() {
  return (
    <div id="clubhouse" className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-8 sm:pb-16">
          <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight leading-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <div className="block">Crocker Dads Club now featuring…</div>
                <div className="block text-blue-600">
                  The Crocker Dads Clubhouse
                </div>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl font-serif">
                Cameron may refer to this location as “Abio Properties” during
                the day,
                <br /> and sure it is his real estate agency, “Abio Properties,”
                that pays for the space.
                <br />
                But any Crocker Dad knows that <strong>4200 Broadway</strong> is
                straight up Dad Zone.
                <hr className="my-4 border border-gray-300 w-1/5 mx-auto " />
                As Athenian Historian and fifth-century BCE Crocker Dads
                President Thucydides once wrote, “Real Estate, Schmeal Estate.”
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto overflow-hidden aspect-w-4 aspect-h-3 rounded-lg shadow-lg mx-4 md:mx-0">
            <Image
              className=""
              src="/images/Clubhouse1.jpg"
              alt="App screenshot"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
            Yes. Is Nice.
          </h2>
        </div>
      </div>
    </div>
  );
}
