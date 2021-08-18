/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: 'How are you guys so good looking?',
    answer:
      'This is perhaps the question we get most often, and yet all we can say is…diet and exercise, right?',
  },
  {
    id: 2,
    question: 'What if I cannot attend an event?',
    answer:
      'Again, this is just a mailing list where we let you know about upcoming events. If you can make it, great! If not, no worries!',
  },
  {
    id: 3,
    question: 'Is there a moms club?',
    answer:
      'Yes, but I do not believe they have a website. Or a clubhouse. We were here first.',
  },
  {
    id: 4,
    question: 'Is the moms club the PTA?',
    answer:
      'No. Seriously. Dads belong in the PTA. Please sign up for the PTA, also.',
  },
  {
    id: 5,
    question:
      'Do I need any particular skills to participate in the fund-raising events? Will it require training like a Tough Mudder?',
    answer:
      'No. The Dads Club is considerably easier than a Tough Mudder. No skills required. No prep required. Just show up!',
  },
  {
    id: 6,
    question: 'How are you guys so good looking?',
    answer: 'You already asked this question.',
  },
];

export default function Example() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t border-blue-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-xl leading-6 text-white">{faq.question}</dt>
                <dd className="mt-2 font-serif text-blue-200">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
