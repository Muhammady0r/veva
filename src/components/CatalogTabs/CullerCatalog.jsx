import React from "react";
import CatalogCard from "../Card/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CullerCatalog = () => {
  return (
    <div>
      <div className="my-12 flex gap-3 max-sm:grid max-sm:grid-cols-2 max-[350px]:grid-cols-1">
        <Select>
          <SelectTrigger className="w-[206px] border-none rounded-lg bg-[#F2F4F7] max-sm:w-full">
            <SelectValue placeholder="Производитель" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Все</SelectItem>
            <SelectItem value="1">Artel</SelectItem>
            <SelectItem value="2">Electronix</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[206px] border-none rounded-lg bg-[#F2F4F7] max-sm:w-full">
            <SelectValue placeholder="Мощность нагрева" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Все</SelectItem>
            <SelectItem value="1">до +95°С</SelectItem>
            <SelectItem value="2">до +195°С</SelectItem>
            <SelectItem value="3">до +230°С</SelectItem>
            <SelectItem value="4">до +3998°С</SelectItem>
            <SelectItem value="5">до +6000°С</SelectItem>
            <SelectItem value="6">до +15.000.000°С</SelectItem>
            <SelectItem value="7">до 210 000 K</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[206px] border-none rounded-lg bg-[#F2F4F7] max-sm:w-full">
            <SelectValue placeholder="Мощность охлаждения" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Все</SelectItem>
            <SelectItem value="1">до +5°С - +7°С</SelectItem>
            <SelectItem value="2">до 0°С - +5°С</SelectItem>
            <SelectItem value="3">до -5°С - 0°С</SelectItem>
            <SelectItem value="3">до -52°С - -5°С</SelectItem>
            <SelectItem value="4">до -236,6°C </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[177px] border-none rounded-lg bg-[#F2F4F7] max-sm:w-full">
            <SelectValue placeholder="Установка бутылки" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Все</SelectItem>
            <SelectItem value="1">Снизу</SelectItem>
            <SelectItem value="2">Сверху</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-7 grid-cols-4 max-[1330px]:grid-cols-3 max-[1045px]:grid-cols-2">
        <CatalogCard isCuller />
        <CatalogCard isCuller />
        <CatalogCard isCuller />
        <CatalogCard isCuller />
        <CatalogCard isCuller />
      </div>
    </div>
  );
};

export default CullerCatalog;
