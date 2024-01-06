"use client";
import * as React from "react";

type Props = {
    data: {
        content: string;
    };
};
export default function Detail({ data }: Props) {
    return (
        <div className="flex justify-center px-4 py-16 bg-base-200">
            <div
                dangerouslySetInnerHTML={{
                    __html: data["content"],
                }}
            ></div>
        </div>
    );
}
