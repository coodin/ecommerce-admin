import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import ColorsClient from "./components/client";
import { ColorsColum } from "./components/colums";

const ColorsPage = async (params: { colorId: string }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.colorId,
    },
    orderBy: { createdAt: "desc" },
  });
  const formatedColors: ColorsColum[] = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do,yyyy"),
  }));
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formatedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
