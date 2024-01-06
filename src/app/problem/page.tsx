import * as React from "react";
import fs from "fs";
import Btn from "lta/app/problem/[id]/components/Btn";

type Props = {};
export default function Page(props: Props) {
    const folder = fs.readdirSync(process.cwd() + "/src/data/");
    return (
        <div className="grid place-items-center">
            <div className="mockup-window border bg-base-300 w-[80%]">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    <div className="overflow-x-auto w-full">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Code</th>
                                    <th>Problem&apos;s name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {folder.map((d, index) => {
                                    const n = d
                                        .replaceAll(".json", "")
                                        .split("_");
                                    return (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{n[0]}</td>
                                            <td>{n[1]}</td>
                                            <td>
                                                <Btn id={n[0]} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
