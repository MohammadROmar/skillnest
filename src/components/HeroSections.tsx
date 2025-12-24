import { Link } from 'react-router-dom';
import { ArrowRight, Sparkle } from 'lucide-react';

import Stars from './Stars';
import UnderlineIcon from '../assets/icons/Undeline';
import studentsImg from '../assets/images/students.jpg';
import user1Img from '../assets/images/user-1.png';
import user2Img from '../assets/images/user-2.png';
import user3Img from '../assets/images/user-3.png';

export default function Hero() {
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
              <Stars size="size-3" />
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
