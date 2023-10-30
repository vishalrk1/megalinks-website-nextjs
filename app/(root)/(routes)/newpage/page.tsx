"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getScenePackData } from "@/redux/scenepacks/actions";
import { scenepackSelector } from "@/redux/scenepacks/selector";
import Link from "next/link";

const NewPage = () => {
  const { data, pending, error } = useAppSelector(scenepackSelector);
  return (
    <div className="p-10">
      <div className="flex flex-col space-y-4">
        {data.map((item) => (
          <Link href={`newpage/${item.id}`} key={item.id}>
            <h2>{item.label}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewPage;
