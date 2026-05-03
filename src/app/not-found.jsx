import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return  (
    <div className= "h-screen bg-purple-100 flex items-center justify-center font-bold text-5xl text-black">
            This page is not found!
            <Link href={"/"}>
                <button className="btn btn-[ri">Back to Home</button>
            </Link>
            </div>
    );
};

export default NotFoundPage;

