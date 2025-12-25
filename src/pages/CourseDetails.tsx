import { useParams } from 'react-router-dom';
import { BadgeCheck, Check, ShieldCheck, ShoppingCart } from 'lucide-react';

import { useCart } from '../context/cart/useCart';
import NotFoundPage from './NotFound';
import { formatPrice } from '../utils/format-price';
import { getCourseDateInfo, getCourseInfo } from '../utils/getCourseInfo';
import { courses, type Course } from '../data/courses';

type CourseProps = { course: Course };

function isValidCourse(id: number | undefined) {
  return id !== undefined && (id >= 0 || id < courses.length);
}

const BUTTON_STYLES =
  'bg-primary flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-white';

export default function CourseDetails() {
  const { id } = useParams();

  const idAsNumber = id ? +id : undefined;
  const isValid = isValidCourse(idAsNumber);

  console.log(isValid);

  if (!isValid) return NotFoundPage();

  const course = courses[idAsNumber!];

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <div className="lg:col-span-5">
          <CourseHeader course={course} />
          <CourseInfo course={course} />
          <WhatYouWillLearn list={course.whatYouWillLearn} />
        </div>

        <InfoCard course={course} />
      </div>
    </>
  );
}

function CourseHeader({ course }: CourseProps) {
  return (
    <section className="section space-y-2">
      <p className="border-primary/20 bg-background text-primary w-fit rounded-2xl border px-2 py-1 text-xs font-medium uppercase">
        {course.category}
      </p>
      <h1
        id={`course-${course.id}`}
        className="mt-4 text-4xl font-extrabold tracking-tight text-black"
      >
        {course.title}
      </h1>
      <p className="text-lg">
        By <span className="font-extrabold">{course.instructor}</span>
      </p>
      <p className="text-text-muted text-sm font-light">
        {course.shortDescription}
      </p>
    </section>
  );
}

function CourseInfo({ course }: CourseProps) {
  const info = getCourseInfo(course);

  return (
    <>
      <section className="section grid grid-cols-2 gap-6 md:grid-cols-3">
        {info.map((detail) => (
          <div key={detail.title} className="flex items-center gap-2">
            <div className={`rounded-xl p-2 ${detail.styles}`}>
              <detail.icon aria-hidden className="size-5" />
            </div>

            <div>
              <h2 className="text-text-muted text-xs font-medium uppercase">
                {detail.title}
              </h2>
              <p className="text-sm font-semibold text-black">{detail.value}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="section">
        <div>
          <h2 className="text-xl font-semibold">About this course</h2>
          <p className="text-text-muted mt-2">{course.fullDescription}</p>
        </div>
      </section>
    </>
  );
}

function WhatYouWillLearn({ list }: { list: Course['whatYouWillLearn'] }) {
  return (
    <section className="section">
      <div className="bg-background border-primary/20 rounded-2xl border p-4">
        <h2 className="text-xl font-semibold">What You'll learn</h2>
        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 lg:grid-cols-2">
          {list.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="rounded-full bg-green-500 p-0.5 text-white">
                <Check aria-hidden className="size-3" />
              </div>
              <p className="text-text-muted text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function InfoCard({ course }: CourseProps) {
  const dateInfo = getCourseDateInfo(course);

  return (
    <section className="section lg:col-span-2">
      <div className="bg-background border-primary/20 overflow-hidden rounded-2xl border">
        <img
          src={course.image}
          aria-labelledby={`course-${course.id}`}
          className="h-56 w-full object-cover object-center"
        />

        <div className="space-y-4 p-4">
          <p className="text-2xl font-bold">{formatPrice(course.price)}</p>
          <hr className="text-gray-200" />

          <div className="space-y-4">
            {dateInfo.map((info) => (
              <li
                key={info.title}
                className="flex items-center justify-between gap-4"
              >
                <div className="text-text-muted flex items-center gap-2">
                  <info.icon className="size-4" />
                  <p className="text-sm font-medium capitalize">{info.title}</p>
                </div>
                <p className="text-sm">{info.value}</p>
              </li>
            ))}
          </div>

          <AddToCartBtn course={course} />

          <p className="flex items-center justify-center gap-2 text-center">
            <ShieldCheck className="size-4" />
            <span className="text-text-muted text-xs">
              30-Days Money-Back Guarantee
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function AddToCartBtn({ course }: { course: Course }) {
  const { addToCart, isInCart } = useCart();

  function handleAdd() {
    addToCart({
      courseId: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    });
  }

  if (isInCart(course.id))
    return (
      <p className={BUTTON_STYLES}>
        <BadgeCheck className="size-4" />
        <span>Course already in Cart</span>
      </p>
    );

  return (
    <button onClick={handleAdd} className={`${BUTTON_STYLES} cursor-pointer`}>
      <ShoppingCart className="size-5" />
      <span className="font-medium">Add to Cart</span>
    </button>
  );
}
