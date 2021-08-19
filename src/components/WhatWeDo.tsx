/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const bigFour = [
  {
    id: 1,
    name: 'Spaghetti Feed',
    description:
      'The annual Spaghetti Feed is a free event open to the public and the neighborhood. All are welcome. While we used to cook all the pasta ourselves (and Adam still has all the pots to prove it!), we now get the event catered thanks to key sponsors. The dads are just responsible for all the logistics, set-up, and tear-down, as well as communications.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Walkathon',
    description:
      'The Walkathon is our large Autumn event. While the PTA coordinates all the walking, we coordinate food. Our grilling station is the stuff of legends, and the CROCKER BURGER™ is the star of the show. Beer will be made available free of charge — across the street — for all dads. (And moms.)',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Golf Tournament',
    description:
      'The Annual Crocker Dads Open is a messy scramble held in the early spring every year. We say that it is messy because most of the dads attending do not golf. Many of them drink, though. We split into groups of four and play "best ball" so all are welcome regardless of skill level and interest.',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    name: 'Carnival',
    description:
      'Our final event of the year wraps up the spring with a bang. Once again, the PTA coordinates […does anyone know what else is happening at the Carnival other than grilling?], and we grill. The CROCKER BURGER™ emerges from hibernation, and beer will be made available once more.',
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Rye vs Bourbon',
    description:
      'A beloved tradition taking place at the Crocker Dads Clubhouse, we pour a handful of bourbons and a handful of ryes, and we let the people decide.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Mescal vs Tequila',
    description:
      'This is really quite a bit like the original Rye vs Bourbon tasting, but with a south-of-the-border flair. No, Jaison, it is still not a costume event.',
    icon: MailIcon,
  },
  {
    id: 3,
    name: 'Warriors games',
    description:
      'Any time there is a critical game — and many times when there is not — we gather to watch a game, shoot pool, and have a few beverages.',
    icon: MailIcon,
  },
];

export default function Example() {
  return (
    <div id="events" className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Ok, but…what would you say…you do here?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center md:text-xl text-gray-600 font-serif">
            Our job is to raise money for the school.
            <br />
            Or — more often — our job is to grill food while other people are
            raising money.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              The Big Four
            </h3>
            <p className="mt-3 text-lg text-gray-600">
              There are four events which mark the cornerstones of our
              fundraising efforts for the year. When these events arise, you can
              expect an email from the team coordinating volunteers. If you are
              available, we would love to have your help.
            </p>

            <dl className="mt-10 space-y-10">
              {bigFour.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="aspect-w-3 aspect-h-4 rounded-xl shadow-xl overflow-hidden lg:aspect-none lg:h-full mx-4 md:mx-0">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=490&q=80"
                alt=""
              />
            </div>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                But that is not all…
              </h3>
              <p className="mt-3 text-lg text-gray-600 font-serif">
                Beyond the big four fundraisers are a handful of social events
                less focused on fundraising and more focused on, well, us.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative ">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-600 font-serif">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div className="aspect-w-3 aspect-h-4 rounded-xl shadow-xl overflow-hidden lg:aspect-none lg:h-full mx-4 md:mx-0">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="https://images.unsplash.com/photo-1617820915076-5f3163127e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
