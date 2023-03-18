import Image from "next/image";

export default function GitHubButton() {
    return (<a href="https://github.com/solunian/dripdrop" target="_blank">
        <Image
        src="/github-mark.svg"
        width={25}
        height={25}
        color="white"/>
    </a>);
}