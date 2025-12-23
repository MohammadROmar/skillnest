import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';

import LogoIcon from '../assets/icons/Logo';
import studentsImg from '../assets/images/students-2.jpg';

export default function LogInPage() {
  return (
    <main className="flex min-h-screen gap-6">
      <section className="relative flex flex-1 flex-col items-center justify-center p-6">
        <img
          src={studentsImg}
          alt="Student image"
          className="absolute inset-0 -z-50 size-full object-cover object-center opacity-20 blur-xs lg:hidden"
        />

        <div className="w-full space-y-6 lg:max-w-sm">
          <div>
            <Link
              to="/"
              className="flex w-fit items-center gap-2 text-xl font-semibold text-black"
            >
              <LogoIcon className="size-8 shrink-0" />
              <span>SkillNest</span>
            </Link>

            <h1 className="mt-16 to-black text-4xl font-extrabold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-text-muted mt-1 text-sm">
              Enter your credentails to access your account.
            </p>
          </div>
          <LoginForm />
        </div>
      </section>

      <SidePanel />
    </main>
  );
}

function LoginForm() {
  return (
    <form className="space-y-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm">
          Email Address
        </label>
        <div className="relative">
          <Mail className="text-text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2 cursor-pointer" />
          <input
            id="email"
            required
            type="email"
            placeholder="Enter your email"
            className="input pl-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <PasswordInput />
      </div>

      <button className="bg-primary shadow-primary/25 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2 font-semibold text-white shadow transition-transform duration-300 hover:scale-98">
        Log In
      </button>
    </form>
  );
}

function PasswordInput() {
  const [type, setType] = useState<'password' | 'text'>('password');

  const Icon = type === 'text' ? EyeClosed : Eye;

  return (
    <div className="relative">
      <Lock className="text-text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2 cursor-pointer" />

      <input
        id="password"
        required
        type={type}
        placeholder="Enter your password"
        className="input px-10"
      />

      <button
        type="button"
        onClick={() =>
          setType((prev) => (prev === 'text' ? 'password' : 'text'))
        }
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
      >
        <Icon className="text-text-muted size-4" />
      </button>
    </div>
  );
}

function SidePanel() {
  return (
    <section className="before:bg-primary/25 relative hidden flex-1 overflow-hidden before:absolute before:inset-0 before:z-10 before:size-full lg:block">
      <img
        src={studentsImg}
        alt="Student image"
        className="size-full object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-0 z-20 space-y-8 p-8 text-white">
        <p className="w-fit rounded-2xl border border-white/50 bg-white/20 px-2 py-0.5 text-xs uppercase backdrop-blur-xs">
          Daily inspiration
        </p>
        <p className="text-5xl font-bold">
          "The capacity to learn is a{' '}
          <span className="text-cyan-300">gift</span>; the ability to learn is a{' '}
          <span className="text-cyan-300">skill</span>; the willingness to learn
          is a <span className="text-cyan-300">choise</span>."
        </p>

        <p className="font-light capitalize">- skillnest philosophy</p>
      </div>
    </section>
  );
}
