import React from 'react';

import {
  AnnotationIcon,
  TruckIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Beer is generally available',
    description:
      'Plenty of folks in the Crocker Dads community do not drink, but for historical reasons we continue to tout the ready availability of beer at all Crocker Dads functions.',
    icon: LightningBoltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'There are actually no fees whatsoever. We are all just here to raise funds for Crocker Highlands Elementary. Or, I guess it is for the PTA, which is for Crocker. And also the A-to-Z fund. Definitely raising funds of many types.',
    icon: ScaleIcon,
  },
  {
    name: 'Mostly dads',
    description:
      'It has not escaped us that the gendered identity of a “Dads Club” is a bit out of step with the times. Yet we persist in this silliness, knowing history may judge our organization harshly.',
    icon: TruckIcon,
  },
  {
    name: 'No commitment',
    description:
      'Let’s not overthink this. You really just sign up for the Google Group, and then you attend anything you care to. We always appreciate the help at fundraising events!',
    icon: AnnotationIcon,
  },
];

export default function Example() {
  return (
    <div id="about" className="pt-24 md:pt-48 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Getting Started
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Seriously, it’s just a Google Group…
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 font-serif lg:mx-auto">
            If you have a child at Crocker Highlands Elementary in Oakland,
            California, then by signing up for the Google Group, you will know
            everything going on with the Dads’ Club. It’s that simple.
          </p>
        </div>

        <div className="mt-24 sm:mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-xl font-bold leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base font-serif text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
