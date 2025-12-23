import { Link } from 'react-router-dom';
import { ArrowRight, Sparkle, Star } from 'lucide-react';

import UnderlineIcon from '../assets/icons/Undeline';
import studentsImg from '../assets/images/students.jpg';
import user1Img from '../assets/images/user-1.png';
import user2Img from '../assets/images/user-2.png';
import user3Img from '../assets/images/user-3.png';
import { categories } from '../data/categories';
import { companies } from '../data/companies';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesTrust />
      <Categories />
      <StartLearning />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-secondary bg-[url(worn-dots.png)] bg-size-[100px]">
      <div className="section flex min-h-screen items-center justify-center gap-4 text-center lg:text-start">
        <div className="flex flex-1 flex-col items-center justify-around space-y-6 lg:block">
          <p className="text-primary border-primary/20 bg-primary/10 flex w-fit items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium">
            <Sparkle className="size-3 text-yellow-500" />
            New: AI & Machine Learning Track
          </p>

          <h1 className="text-6xl font-extrabold tracking-tight text-balance text-black capitalize">
            Learn skills that{' '}
            <span className="from-primary relative bg-linear-to-r to-purple-600 bg-clip-text text-transparent">
              shape your future
              <UnderlineIcon className="text-primary/30 absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2" />
            </span>
          </h1>

          <p className="text-text-muted text-balance">
            High-quality online courses designed for modern learners. Master new
            technologies, design, and buisness skills at your own pace with
            industry experts.
          </p>

          <Link
            to="/courses"
            className="bg-primary shadow-primary/25 flex w-fit items-center gap-2 rounded-2xl px-4 py-3 text-lg font-semibold text-white shadow transition-transform duration-300 hover:scale-98"
          >
            Explore Courses <ArrowRight className="size-5" />
          </Link>

          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <div className="flex -space-x-2 select-none">
              <img
                src={user1Img}
                alt="User Image"
                className="size-7 rounded-full border border-white object-cover object-center"
              />
              <img
                src={user2Img}
                alt="User Image"
                className="size-7 rounded-full border border-white object-cover object-center"
              />
              <img
                src={user3Img}
                alt="User Image"
                className="size-7 rounded-full border border-white object-cover object-center"
              />
            </div>
            <div>
              <div className="flex items-center justify-center gap-0.5 lg:justify-start">
                <Star className="size-3 fill-yellow-500 text-yellow-500" />
                <Star className="size-3 fill-yellow-500 text-yellow-500" />
                <Star className="size-3 fill-yellow-500 text-yellow-500" />
                <Star className="size-3 fill-yellow-500 text-yellow-500" />
                <Star className="size-3 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-text-muted text-sm">
                Trusted by 2,000+ Students
              </p>
            </div>
          </div>
        </div>
        <div className="before:bg-primary/25 relative hidden flex-1 overflow-hidden rounded-2xl shadow before:absolute before:inset-0 before:z-10 before:size-full lg:block">
          <img
            src={studentsImg}
            alt="An image of students"
            className="object-cover object-center select-none"
          />

          <div className="absolute top-[30%] left-0 z-20 rounded-r-full bg-white px-6 py-2">
            <p className="text-sm font-bold">10K+</p>
            <p className="text-text-muted text-xs">Active Learners</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompaniesTrust() {
  return (
    <section className="bg-background text-text-muted w-screen py-8">
      <div className="section space-y-6">
        <h2 className="text-center text-xs font-medium tracking-tight uppercase">
          Trusted by companies worldwide
        </h2>
        <div className="before:from-background after:to-background relative flex overflow-x-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-8 before:bg-linear-to-r before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-8 after:bg-linear-to-r after:from-transparent">
          <ul className="animate-infinite-scroll flex items-center gap-8">
            {[...companies, ...companies].map(({ label, icon: Icon }, i) => (
              <li key={`${label}-${i}`} className="flex items-center gap-2">
                <Icon className="size-6" />
                <span className="text-xl font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="section my-8">
      <p className="text-primary text-xs font-medium tracking-tight">
        TOP CATEGORIES
      </p>
      <h2 className="text-3xl font-bold tracking-tight">
        Expolre Top Corrses by Category
      </h2>
      <p className="text-text-muted bg- text-sm">
        Browse our wide range of categories and start learning what matters to
        you.
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <li
            key={category.label}
            className="bg-primary/2 border-primary/10 rounded-2xl border p-4"
          >
            <div
              className={`w-fit rounded-xl p-2 ${category.bg} ${category.text}`}
            >
              <category.icon className="size-5" />
            </div>
            <h3 className="mt-2 text-lg font-semibold">{category.label}</h3>
            <p className="text-text-muted text-xs">
              Over {category.count} courses
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function StartLearning() {
  return (
    <section className="bg-secondary py-8">
      <div className="section">
        <div className="bg-primary relative flex overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-[url(carbon-fibre.png)] before:opacity-10">
          <div className="relative flex w-full flex-wrap items-center justify-between gap-4 p-8 before:absolute before:-bottom-[10%] before:-left-3 before:size-20 before:rounded-full before:bg-white/15 after:absolute after:-top-[10%] after:-right-3 after:size-20 after:rounded-full after:bg-white/15">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Start learning from the best
              </h2>
              <p className="mt-2 text-sm font-light text-white">
                Join millions of learners worldwide and get access to over 5000+
                courses.
              </p>
            </div>
            <Link
              to="/log-in"
              className="text-primary relative z-10 size-fit rounded-2xl bg-white px-4 py-2 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
