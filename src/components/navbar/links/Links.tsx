import Link from "next/link";

function Links() {
  return (
    <ul>
      <li>
        <Link href={"/blog"}>About</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
    </ul>
  );
}
export default Links;
