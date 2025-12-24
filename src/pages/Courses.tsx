import { Link, useSearchParams } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';

import Pagination from '../components/Pagination';
import { formatPrice } from '../utils/format-price';
import { courses, type Course } from '../data/courses';

const TOTAL_ITEMS = courses.length;
const PAGE_SIZE = 6;
const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

export default function CoursesPage() {
  return (
    <>
      <section className="section">
        <h1 className="text-5xl font-extrabold tracking-tight text-black">
          Our Courses
        </h1>
        <p className="text-text-muted mt-2 max-w-lg text-sm">
          Expand your horizons with our curated selection of expert-led content
          designed to help you master new skills.
        </p>
      </section>

      <CoursesList />
    </>
  );
}

function CoursesList() {
  const [searchParams] = useSearchParams();

  const currentPage = Math.max(1, Number(searchParams.get('page')) || 1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedCourses = courses.slice(startIndex, endIndex);

  return (
    <section className="section">
      <ul className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {paginatedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        basePath="/courses"
      />
    </section>
  );
}

const LEVEL_TEXT_COLOR = {
  Beginner: 'text-blue-500 border-blue-300',
  Intermediate: 'text-orange-500 border-orange-300',
  Advanced: 'text-green-500 border-green-300',
};

function CourseCard({ course }: { course: Course }) {
  return (
    <li className="bg-background relative grid grid-rows-[auto_1fr] overflow-hidden rounded-2xl border border-gray-200 shadow">
      <p
        className={`bg-background absolute top-4 left-4 rounded-lg border px-4 py-2 text-xs leading-none font-semibold uppercase ${LEVEL_TEXT_COLOR[course.level]}`}
      >
        {course.level}
      </p>

      <img
        src={course.image}
        aria-labelledby={`course-${course.id}`}
        className="h-60 w-full object-cover object-center"
      />
      <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
        <div>
          <p className="text-primary text-xs font-medium uppercase">
            {course.category}
          </p>
          <h2
            id={`course-${course.id}`}
            className="text-lg font-semibold tracking-tight"
          >
            {course.title}
          </h2>
          <p className="text-text-muted mt-1 text-xs">
            {course.shortDescription}
          </p>
        </div>

        <div className="flex items-end">
          <div className="flex flex-1 items-center justify-between">
            <p className="text-xl font-bold">{formatPrice(course.price)}</p>

            <div className="flex items-center gap-4">
              <Link to={`/courses/${course.id}`}>
                <Eye className="text-text-muted size-5" />
              </Link>
              <button className="bg-primary flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white">
                <ShoppingCart className="size-5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
