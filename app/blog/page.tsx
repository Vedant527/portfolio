"use client";
import styles from "../about/styles";
import { Navigation } from "../components/nav";


export default function Blog() {
    return (
        <div>
            <Navigation/>
            <div className={`${styles.yPaddings} relative z-10`}>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <h2 className="font-bold lg:text-[48px] md:text-[36px] sm:text-[28px] text-[24px] uppercase text-zinc-800 dark:text-zinc-200">
                        Coming Soon
                    </h2>
                </div>
            </div>
        </div>
    )
}