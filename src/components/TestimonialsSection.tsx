const testimonials = [
  {
    name: "Christian Jimenez",
    role: "CEO at Broomsmen",
    image: "https://floot.com/images/testimonials/christian_pic.jpg",
    quote: "I'd tried other platforms but could never advance far enough to feel truly productive. The time investment and constant token usage just to fix issues had me ready to hire a developer again. With Floot, I had a working app within a week, even working in my off-hours, and started beta testing with my team days later. We estimate Floot has saved us around $20,000 so far. Best of all, their customer support has gone above and beyond at every turn."
  },
  {
    name: "Can Ünal",
    role: "Founding Partner at Başka İşler Business Development Agency LTD",
    image: "https://floot.com/images/testimonials/can_unal_pic.jpeg",
    quote: "I always had vision but lack of crew. Then the AI era came like an angel. After wasting time with several well-known AI builders, I was ready to throw in the towel. Then I found Floot. Finally an AI that understands me when I say \"don't put that there\" at first try, and also what \"that\" is. For example - I have no idea what a \"regex\" is, but I know what it does, and that is always enough for Floot."
  },
  {
    name: "Renee Leach",
    role: "Owner at Funding The Jump",
    image: "https://floot.com/images/testimonials/renee_pic.jpeg",
    quote: "Floot didn't just speed me up; it made what I thought was impossible for just ONE PERSON entirely achievable. Floot removed countless blockers and took prompting requests and fixing errors like a champ. I was able to iterate faster, reducing dev costs by several thousands of dollars than with \"traditional\" coding."
  },
  {
    name: "Val Kleyman",
    role: "Founder at AdValorem",
    image: "https://floot.com/images/testimonials/val_kleyman_pic.jpeg",
    quote: "I cannot tell you how thankful I am that the \"root cause\" the AI finds, is ACTUALLY the REAL root cause. Other tools find so many root causes it would make your head spin, and here it finds the problem and fixes it. Impressive."
  },
  {
    name: "Christian Monty",
    role: "Founder at Verdic",
    image: "https://floot.com/images/testimonials/monty_pic.png",
    quote: "I've tried just about every tool out there. They're all great in their own ways, but none of them got me this close to actually finishing my idea. Floot feels different. Every time I use it, my idea becomes more real. It's not just generating code or spitballing ideas; it's helping me solve real, messy problems and pushes my project forward in ways that other tools couldn't do for me. I finally feel like I'm building something solid instead of being stuck in endless prototypes."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What our builders say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who trust Floot to bring their ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;