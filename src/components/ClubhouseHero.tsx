import Image from 'next/image';

export default function ClubhouseHero() {
  return (
    <>
      <div className="w-screen aspect-w-14 aspect-h-5">
        <Image
          src="/images/Clubhouse2.jpg"
          alt="Clubhouse Image 2"
          layout="fill"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-8 mb-48 px-4 sm:px-6 lg:px-8 font-serif">
        One more look at that beautiful Crocker Dads Clubhouse…
      </div>
    </>
  );
}
