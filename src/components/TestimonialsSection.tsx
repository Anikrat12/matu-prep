const testimonials = [
  {
    quote:
      '"Matu-Prep helped me organize all my notes and revision sheets. I felt so much more prepared!"',
    name: 'Alex',
  },
  {
    quote:
      '"The access to past exam papers and corrections was a game changer for my studies."',
    name: 'Samira',
  },
  {
    quote:
      '"I loved being able to see how other students revised. It saved me so much time!"',
    name: 'Luca',
  },
  {
    quote:
      '"Everything I needed was in one place. Highly recommend for anyone doing the Maturité."',
    name: 'Emilie',
  },
];

const TestimonialsSection = () => (
  <section className='testimonials'>
    <h2>What our students say</h2>
    <div className='testimonials-grid'>
      {testimonials.map((t, idx) => (
        <div
          className='testimonial'
          key={idx}
        >
          <blockquote>{t.quote}</blockquote>
          <div>- {t.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
