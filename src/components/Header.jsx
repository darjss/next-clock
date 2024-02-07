import Link from "next/link"
const Header = () => {
    return (
      <ul className="flex gap-7 bg-slate-900 text-white">
        <Link href="/time/stopwatch">
          <li>Stopwatch</li>
        </Link>
        <Link href="/time/clock">
          <li>Clock</li>
        </Link>
        <Link href="/time/timer">
          <li>Timer</li>
        </Link>
      </ul>
    )
}
export default Header