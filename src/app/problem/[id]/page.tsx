import * as React from "react";
import fs from "fs";
import Detail from "lta/app/problem/[id]/components/Detail";
import path from "node:path";

type Props = {
    params: {
        id: string;
    };
};
export default function Page({ params }: Props) {
    const file = fs
        .readdirSync(process.cwd() + "/src/data/")
        .filter((item) => item.includes(params.id))[0];

    const json = fs
        .readFileSync(process.cwd() + "/src/data/" + file, {
            encoding: "utf-8",
        })
        .replace(/[\u0000-\u0019]+/g, "");
    const data = JSON.parse(json);
    return (
        <div className="min-h-screen w-screen grid place-items-center">
            <div className="mockup-window border bg-base-300 min-w-[80%]">
                <Detail data={data} />
            </div>
        </div>
    );
}
