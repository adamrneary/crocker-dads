const people = [
  {
    name: 'Cameron Platt',
    role: 'President',
    imageUrl:
      'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80',
    bio: 'Cameron introduced the Crocker Dads Clubhouse, a fully furnished activities center for thirsty dads. It has been a haven for watching the game, shooting pool, and staying out too late.',
  },
  {
    name: 'Adam Neary',
    role: 'President Emeritus',
    imageUrl:
      'https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    bio: 'When Adam rearchitected the service line for the Walkathon in two separate, high-velocity lines, we more than tripled our capacity. It was pure genius.',
  },
  {
    name: 'Alex Chase',
    role: 'President Emeritus',
    imageUrl:
      'https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Alex stunned the group to silence with the existential question: “Have these grills ever been cleaned?!” From that moment forward, the dads cleaned the grills.',
  },
  {
    name: 'Derek Lindgren',
    role: 'President Emeritus',
    imageUrl:
      'https://images.unsplash.com/photo-1621347311611-5754c01d1fd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    bio: 'Derek asked the group if we should have a golf tournament. We all said, “No.” He did it anyway. Turns out? Lots of fun.',
  },
  {
    name: 'Jaison Smith',
    role: 'President Emeritus',
    imageUrl:
      'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    bio: 'Jaison may never have bought the group beer, but he knew a dude who still lets us put a keg behind a car next to the school. And that forever changed the face of the organization.',
  },
  {
    name: 'Josh Hurwitz',
    role: 'President Emeritus',
    imageUrl:
      'https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    bio: 'Josh pre-dates written record of the Crocker Dads organization. He remains a legend. His exploits echo through the halls of time.',
  },
];

export default function Example() {
  return (
    <div id="leadership" className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our leadership…
            </h2>
            <p className="text-lg text-gray-600 font-serif">
              The Presidents of the Dads Club represent a long line of
              leadership excellence, each leaving the Dads Club in narrowly
              better shape than they found it. Evolving from napkins with
              instructions to Google Docs to a fully function clubhouse and a
              world class marketing website, they are the standard bearers for
              Dads Clubs globally.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-2 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="text-lg leading-6 font-bold space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-blue-600 font-light">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-600 font-serif">{person.bio}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
