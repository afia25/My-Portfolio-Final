import { DiJava } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { DiDjango } from "react-icons/di";

const Tools = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Tools</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <AiFillCopyrightCircle className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoCPlusPlus className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJava className="text-7xl text-red-500"/>
            </div>  
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDjango className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-cyan-400"/>
            </div>
        </div>
    </div>
  );
};

export default Tools;