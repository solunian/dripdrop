import Image from "next/image";
import Link from "next/link";

export default function GitHubButton() {
    return (<Link href="https://github.com/solunian/dripdrop">
        <a target={'_blank'}>
            <Image
                src="/github-mark.svg"
                width={25}
                height={25}/>
        </a>

    </Link>);
}