import { BsGit, BsGithub } from "react-icons/bs";
import { BiLogoFirebase, BiLogoReact } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { SiNetlify, SiVercel } from "react-icons/si";

export const toolsData = [
    {
        label: 'vsCode',
        Icon: TbBrandVscode,
        color: 'vscode'
    },
    {
        label: 'Git',
        Icon: BsGit,
        color: 'git'
    },
    {
        label: 'GitHub',
        Icon: BsGithub,
        color: 'github'
    },
    {
        label: 'Firebase',
        Icon: BiLogoFirebase,
        color: 'firebase'
    },
    {
        label: 'Netlify',
        Icon: SiNetlify,
        color: 'netlify'
    },
    {
        label: 'Vercel',
        Icon: SiVercel,
        color: 'vercel'
    },
    {
        label: 'React Dev Tools',
        Icon: BiLogoReact,
        color: 'reactDev'
    },

]