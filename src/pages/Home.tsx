import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, Quote } from 'lucide-react';

import Stars from '../components/Stars';
import Hero from '../components/HeroSections';
import {
  categories,
  companies,
  whyUs,
  whatLearnersSay,
  overview,
} from '../data/homePageData';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesTrust />
      <Overview />
      <WhyUs />
      <WhatLearnensSay />
      <Categories />
      <StartLearning />
    </>
  );
}

function CompaniesTrust() {
  return (
    <section className="text-text-muted w-screen py-8">
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

function Overview() {
  return (
    <section className="bg-secondary py-8">
      <div className="section grid grid-cols-1 gap-4 md:grid-cols-2">
        {overview.map((item) => (
          <div
            key={item.title}
            className="border-background space-y-4 rounded-2xl border bg-white p-4 shadow"
          >
            <div
              className={`w-fit rounded-xl p-2 ${item.textColor} ${item.bgColor}`}
            >
              <item.icon className="size-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-black">{item.title}</h2>
              <p className="text-text-muted text-sm font-light">
                {item.description}
              </p>
            </div>
            {item.features.map((feature) => (
              <div key={`${item.title}-${feature}`} className="space-y-1">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    <Check
                      className={`size-4 rounded-full p-0.5 text-white ${item.check}`}
                    />
                  </div>
                  <p className="text-sm">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section my-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Why Choose SkillNest
        </h2>
        <p className="text-text-muted max-w-lg text-center text-sm">
          We&apos;ve built a platform that puts the learner first, combining
          cutting-edge technology with human connection.
        </p>
      </div>

      <div className="mt-8 space-y-8 lg:mt-16 lg:space-y-16">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="mt-6 flex flex-col-reverse gap-4 lg:grid lg:grid-cols-2 lg:gap-8"
          >
            <div
              className={`relative overflow-hidden rounded-2xl shadow before:absolute before:inset-0 before:z-10 before:size-full ${item.styles}`}
            >
              <img
                src={item.image}
                className="flex-1 object-cover object-center"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4">
              <div className={`${item.bgSyles} w-fit rounded-xl p-1`}>
                <item.icon className={`size-8 p-1 ${item.textStyles}`} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-text-muted max-w-lg text-sm font-light">
                {item.description}
              </p>
              <Link
                to="/courses"
                className={`flex items-center gap-2 text-sm font-medium ${item.textStyles}`}
              >
                {item.link} <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatLearnensSay() {
  return (
    <section className="bg-secondary py-8">
      <div className="section">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          What Our Learners Say
        </h2>

        <ul className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {whatLearnersSay.map((testemonial) => (
            <TestemonialCard key={testemonial.name} testemonial={testemonial} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestemonialCard({
  testemonial,
}: {
  testemonial: (typeof whatLearnersSay)[number];
}) {
  return (
    <li className="relative grid grid-rows-[auto_auto_1fr] gap-4 rounded-2xl bg-white p-4 shadow">
      <Quote className="absolute top-4 right-4 size-5 text-black/25" />
      <div className="w-fit">
        <Stars size="size-4" />
      </div>
      <p className="text-sm">"{testemonial.description}"</p>

      <div className="flex items-end">
        <div className="flex items-center gap-4">
          <img
            src={testemonial.image}
            className="size-6 rounded-full object-cover object-center"
          />
          <div>
            <h3 className="text-sm font-medium">{testemonial.name}</h3>
            <p className="text-text-muted text-xs font-light">
              {testemonial.specialty}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function Categories() {
  return (
    <section className="section my-8">
      <p className="text-primary text-xs font-medium tracking-tight">
        TOP CATEGORIES
      </p>
      <h2 className="text-3xl font-bold tracking-tight">
        Expolre Top Courses by Category
      </h2>
      <p className="text-text-muted text-sm">
        Browse our wide range of categories and start learning what matters to
        you.
      </p>

      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category) => (
          <li
            key={category.label}
            className="bg-primary/2 border-primary/10 rounded-2xl border p-4 shadow"
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
  const { pathname } = useLocation();

  return (
    <section className="bg-secondary py-8">
      <div className="section">
        <div className="bg-primary relative flex overflow-hidden rounded-2xl shadow before:absolute before:inset-0 before:bg-[url('/images/carbon-fibre.png')] before:opacity-10">
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
              state={{ from: pathname }}
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
