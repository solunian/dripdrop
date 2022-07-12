import Link from "next/link";

export default function PageLink(props) {
    return (
        <Link href={props.href} >
            <a className={`hover:underline ${props.className}`} target={(props.href.startsWith("/") || props.href.startsWith("#")) ? "_self" : "_blank"}>
                {props.children}
            </a>
        </Link>
    );
}