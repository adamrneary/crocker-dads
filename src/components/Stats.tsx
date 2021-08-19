export default function Example() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl  font-extrabold leading-tight text-gray-900">
            Trusted by Crocker Highlands
            <br />
            …largely out of necessity.
          </h2>
          <p className="mt-3 text-xl font-serif text-gray-600 sm:mt-4">
            If we are not cooking at events, people get hungry, and then they go
            home.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-bold text-gray-600">
                    Handsome
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-bold text-gray-600">
                    Being Dads
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-bold text-gray-600">
                    Burgers Grilled
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">
                    {`>`}100k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
