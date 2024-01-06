"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

type Props = {
    id: string;
};
export default function Btn({ id }: Props) {
    const router = useRouter();
    const handOnClick = React.useCallback(() => {
        router.push("/problem/" + id);
    }, []);

    return (
        <button className="btn btn-active" onClick={handOnClick}>
            Detail
        </button>
    );
}
